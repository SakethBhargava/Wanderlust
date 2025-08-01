const mongoose = require("mongoose");
const initData = require("./data.js");
require('dotenv').config();
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.CONNECTION_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((item) => ({ ...item, owner: "6887c0fe99a28361dad9a995"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();