const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  cartId:{
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  status: String,
  products: [ProductSchema],  // Array of product objects 3ala al ProductSchema
 
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
});


//creating model awl 7aga 2asm al model tany 7aga al schema aly 3amalnaha
const cart = mongoose.model("cart", cartSchema);

module.exports = cart;