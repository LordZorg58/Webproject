const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/getUser', orderController.getUser);
  router.post('/getProduct', orderController.getProduct);
  router.post('/getAllOrders', orderController.getAllOrders);
  router.post('/updateOrder', orderController.updateOrder);
  router.post('/deleteOrder', orderController.deleteOrder);







module.exports = router;
