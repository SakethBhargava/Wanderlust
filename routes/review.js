const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { isLoggedIn, isAuthor, validateReview } = require("../middleware.js");
const { postReview, deleteReview } = require("../controllers/reviews.js");


// Create Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(postReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn, isAuthor, wrapAsync(deleteReview));

module.exports = router;