const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/test";

mongoose
  .connect(MONGO_URL)
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
