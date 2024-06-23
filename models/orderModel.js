const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    productIds: [mongoose.Schema.Types.ObjectId],
    orderDate: { type: Date, default: Date.now },
    status: String,
    total:Number
},{
    timestamps: true, //createdAt and updatedAt fields
  });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;