const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productModel=require('../models/productModel');
const domainName = 'dxx24bpv-8080.uks1.devtunnels.ms';
var moment = require('moment'); //al time stamp handlation wii al format fal ejs
var methodOverride = require('method-override')//dah 3ashn al delete man al database

  //display al products fal table get products
  router.get('/Admin',productController.getProducts);
    
  
  //create
  router.post("/Web-Project-Final/Web-Project-main/server/views/Admin.ejs",productController.createProduct);
  
 
  router.delete("/deletee/:id",productController.deleteProduct);
  
  
  //get data to the edit page
  router.get('/Adminedit/:id',productController.moveProducttoedit);
  
  
  // update fal database
  router.put("/updateProduct/:id",productController.updateProduct);
  
 

module.exports = router;
