const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, 
      unique: true,
      trim: true, // Remove whitespace from both ends of the string
      minlength: [3, 'Too short product title'], 
      maxlength: [100, 'Too long product title'], 
    },
    description: {
      type: String,
      minlength: [20, 'Too short product description'], 
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'], 
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        trim: true,
      },
    priceAfterDiscount: {
    type: Number,
    },

    colors: [String], 

    images: [String], 

    category: String,
    size: [String],

    ratingsAverage: {
        type: Number,
        min: [1, 'Rating must be above or equal 1.0'],
        max: [5, 'Rating must be below or equal 5.0'],
      }
  }, {
    timestamps: true, //createdAt and updatedAt fields
  });
  

const Product = mongoose.model('Product', productSchema);

module.exports = Product;