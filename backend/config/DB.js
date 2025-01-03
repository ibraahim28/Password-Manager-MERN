const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
