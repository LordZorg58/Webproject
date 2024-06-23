const express = require('express');
const router = express.Router();
const domainName = 'dxx24bpv-8080.uks1.devtunnels.ms';
var moment = require('moment'); //al time stamp handlation wii al format fal ejs
const userModel=require('../models/userModel');
const userController = require('../controllers/userController');
var methodOverride = require('method-override')//dah 3ashn al delete man al database


  //display al user fal table get products
  router.get('/AdminU',userController.getUsers);
    
  
  //create
  router.post("/Web-Project-Final/Web-Project-main/server/views/AdminU.ejs",userController.createUser);
  

  router.delete("/delete:id",userController.deleteUser);
  
  
  //get data to the edit page
  router.get('/AdminUedit/:id',userController.moveUsertoedit);
  
  
  //update fal database
  router.put("/updateUser/:id",userController.updateUser);
  
  

module.exports = router;
