require("dotenv").config();
const mongoose = require("mongoose");
const connectDb = () => {
  return mongoose.connect("mongodb+srv://invoiceSystem:9s1asbk9weCocMyg@pm.1tahh.mongodb.net/GraphHard?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
      console.log("Connection to Database failed.");
    }
    else{
      console.log("Database connection successful.");
    }
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;
