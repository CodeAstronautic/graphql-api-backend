const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
    unique: true,
  },
  LastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
