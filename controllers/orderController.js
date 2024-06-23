const Order = require('../models/orderModel');
const productModel = require('../models/productModel');
const userModel = require('../models/userModel');
const getUser = async (req, res) => {
    try {
      const result = await userModel.findById(req.body.userId);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send(`An error occurred while fetching users: ${err.message}`);
    }
  };
  const getProduct = async (req, res) => {
    try {
      const result = await productModel.findById(req.body.id);
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send(`An error occurred while fetching products: ${err.message}`);
    }
  };
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};
const updateOrder = async (req, res) => {
    const orderId = req.body.id;
    const updateData = req.body;

    try {
        const order = await Order.findByIdAndUpdate(orderId, updateData, { new: true });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
};
const deleteOrder = async (req, res) => {
    const orderId = req.body.id;

    try {
        const order = await Order.findByIdAndDelete(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};

module.exports = {getUser,getProduct,getAllOrders,updateOrder,deleteOrder};