const Listing = require("../models/listing");
const Review = require("../models/review");


// Review Posting controller
const postReview = async(req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id; // Set the author to the current user
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "Review posted successfully!");
  res.redirect(`/listings/${listing._id}`);
};

//Delete Review controller
const deleteReview = async(req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted successfully!");
  res.redirect(`/listings/${id}`);
}


module.exports = { postReview, deleteReview };