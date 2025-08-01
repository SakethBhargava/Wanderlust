const express = require("express");
const router = express.Router( { mergeParams: true } );
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing }= require("../middleware.js");
const { index, newListing, show, create, edit, update, deletedListing } = require("../controllers/listings.js");
const multer = require("multer"); // Import multer for handling file uploads
const { storage } = require("../cloudConfig.js"); // Assuming you have a cloudConfig.js for storage configuration
const upload = multer({ storage }); // Configure multer with your storage settings


router.route("/")
.get(wrapAsync(index)) // Index Route
.post(isLoggedIn, upload.single("listing[image_upload]"), validateListing, wrapAsync(create)); // Create Route

// New Route
router.get("/new", isLoggedIn, newListing);

router.route("/:id")
.get(wrapAsync(show)) // Show Route
.put(isLoggedIn, isOwner, upload.single("listing[image_upload]"), validateListing, wrapAsync(update)) // Update Route
.delete(isLoggedIn, isOwner, wrapAsync(deletedListing)); // Delete Route

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(edit));

module.exports = router;