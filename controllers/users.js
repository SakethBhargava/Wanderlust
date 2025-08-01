const { get } = require("mongoose");
const User = require("../models/user");

const getSignUp = (req, res) => {
    res.render("users/signup.ejs");
};

const getLogin = (req, res) => {
    res.render("users/login.ejs");
};

const signup = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registerdUser = await User.register(newUser, password);
        req.login(registerdUser, (err) => { //Automatically log in the user after registration.
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

const login = async (req, res, next) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

const logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out! Come back soon!");
        res.redirect("/listings");
    })
};

module.exports = { getSignUp, getLogin, signup, login, logout };
