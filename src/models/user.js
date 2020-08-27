const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  FirstName: {
    type: String,
    trim: true
  },
  LastName: {
    type: String,
    trim: true
  },
  email:{
    type:String
  },
  Role: {
    type:String,
    isArt:true ,
    isDesigner:true,
    isArtManager:true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
