const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

// Middleware for validating listing schema
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(', ');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// Middleware for validating review schema
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(', ');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to do that!");
    return res.redirect("/login");
  }
  next();
}

// Middleware to save redirect URL before login
const saveRedirectUrl = (req, res, next) => {
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

 // Middleware to save redirect URL before login
 const isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)) {
      req.flash("error", "You are not the owner of this listing!");
      return res.redirect(`/listings/${id}`);
    }
    next();
};

const isAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You do not have permission to delete this review!");
    return res.redirect(`/listings/${id}`);
  }
  next();
}

module.exports = { isLoggedIn, saveRedirectUrl, isOwner, validateListing, validateReview, isAuthor };