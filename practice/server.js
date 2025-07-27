const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
// const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

// app.use(cookieParser("secretcode"));

// //signed cookie
// app.get("/signedcookie", (req, res) => {
//     res.cookie("Raag", "Raadhe", {signed: true});
//     res.send("Signed Cookie Set");
// });

// //verify signed cookie
// app.get("/verify", (req, res) =>{
//     res.send("Verified Cookie: " + req.signedCookies);
//     console.log(req.signedCookies);
// })

const sessionOptions = { // session options
  secret: "SeCrEtCoDe",
  resave: false,
  saveUninitialized: true,
}

app.use(session(sessionOptions)); // using session middleware
app.use(flash()); // using flash middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.get("/reqcount", (req, res) => {
//   if(req.session.count){
//     req.session.count++;
//   }
//   else req.session.count = 1;
//   res.send(`<h1>You sent a request ${req.session.count} times</h1>`);
// })

app.get("/register", (req, res) => {
  let {name = "Anonymous"} = req.query; // using destructuring to get name from query params
  req.session.name = name; //storing some value in session
  if(name === "Anonymous"){
    req.flash("error", "Registration Failed!");
  } else {
    req.flash("success", "Registration successful!");
  }
  res.redirect("/hello"); // redirecting to /hello route
});

app.get("/hello", (req, res) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.render("page.ejs", {name: req.session.name}); // accessing the session value
});

app.get("/test", (req, res) => {
  res.send("<h1>Test Successful!</h1>");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});