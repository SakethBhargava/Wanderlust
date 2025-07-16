require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const MONGO_URL = process.env.CONNECTION_URL;
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const Listing = require('./models/listing');

// Database Connection
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
.then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.error(err);
  });
  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
  
//Test Route
app.get('/', async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// app.get("/TestListing", async (req, res) => {
//   let sampleListings = new Listing({
//     title: "Pradeep Villa",
//     description: "By the beach",
//     price: 100,
//     location: "Goa",
//     country: "India",
//   });

//   await sampleListings.save();
//   res.send("Listing Created");
//   console.log("Sample saved");

// });

//GET ROUTE
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
})

//NEW ROUTE
app.get('/listings/new', async (req, res) => {
  res.render('listings/new.ejs')
})

//SHOW ROUTE
app.get("/listings/:id", async (req, res) =>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
})

//CREATE ROUTE
app.post('/listings', async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect('/listings');
})

//EDIT ROUTE
app.get('/listings/:id/edit', async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render('listings/edit.ejs', {listing})
})

//UPDATE ROUTE
app.put('/listings/:id', async (req, res) => {
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`)
})

//DELETE ROUTE
app.delete('/listings/:id', async (req, res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  res.redirect("/listings")
})

// Server Connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});