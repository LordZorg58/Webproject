const express = require('express');
const router = express.Router();
const shoppingController = require('../controllers/shoppingController');
const productModel=require('../models/productModel');
const domainName = 'dxx24bpv-8080.uks1.devtunnels.ms';
var moment = require('moment'); //al time stamp handlation wii al format fal ejs
var methodOverride = require('method-override')//dah 3ashn al delete man al database

  //display al products fal table get products
  router.get('/shop',shoppingController.getProducts);
    
  
  //get data to the edit page
  router.get('/1stShoes/:id',shoppingController.moveProducttoedit);
  
 

module.exports = router;
