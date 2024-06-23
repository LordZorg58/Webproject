const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    city: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
   
  }
},{
  timestamps: true, //createdAt and updatedAt fields
});

//creating model awl 7aga 2asm al model tany 7aga al schema aly 3amalnaha
const User = mongoose.model("User", userSchema);

module.exports = User;