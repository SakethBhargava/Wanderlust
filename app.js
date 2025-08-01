if(process.env.NODE_ENV !== "production") {
  require('@dotenvx/dotenvx').config()
}
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
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const MongoStore = require("connect-mongo");

// Importing Routes
const listingsRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// Database Connection
const PORT = 3000;
const MONGO_URL = process.env.ATLAS_URL;

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

const store = MongoStore.create({
  mongoUrl: MONGO_URL,
  crypto:{
    secret: process.env.SESSION_SECRET
  },
  touchAfter: 24 * 3600,
  collectionName: "sessions",
});

store.on("error", function(e) {
  console.log("Session Store Error", e);
});

const sessionOptions = {
  store: store,
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

//Passport Configuration / Initialization
app.use(passport.initialize()); // Initialize Passport
app.use(passport.session()); // Persistent login sessions
passport.use(new LocalStrategy(User.authenticate())); // Use local strategy for authentication

passport.serializeUser(User.serializeUser()); // Serialize user for session
passport.deserializeUser(User.deserializeUser()); // Deserialize user from session

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user; // Make current user available in templates. because we cannot access objects directly in EJS templates
  next();
});

// app.get("/demo", async (req, res) =>{
//   let fakeUser = new User({
//     email: "student@gmail.com", 
//     username: "deltastudent",
//   });
//   let registeredUser = await User.register(fakeUser, "student123"); // Registering a demo user
//   res.send(registeredUser);
// });

// Express Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", wrapAsync(async (req, res) => {
  let allListings = await Listing.find({});
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