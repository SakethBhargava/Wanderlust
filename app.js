require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync.js");
const session = require("express-session");
const flash = require("connect-flash");

// Importing Routes
const listingsRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");

// Database Connection
const PORT = 3000;
const MONGO_URL = process.env.CONNECTION_URL;

main().then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.error(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

// View Engine and Middleware Setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  } 
};


app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewRouter);

app.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

// 404 Not Found Middleware
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// General Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
});

// Server Connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});