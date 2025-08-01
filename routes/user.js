const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { getSignUp, getLogin, signup, login, logout } = require("../controllers/users.js");

router.route("/signup")
.get(getSignUp) // Signup GET route
.post(wrapAsync(signup)); // Signup POST route

router.route("/login")
.get(getLogin) // Login GET route   
.post(saveRedirectUrl, 
  passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), 
  login
); // Login POST route

// Logout GET route
router.get("/logout", logout)

module.exports = router;