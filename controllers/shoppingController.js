const express = require('express');
const router = express.Router();
const domainName = 'qjv19z68-8080.euw.devtunnels.ms';
const moment = require('moment'); 
const productModel = require('../models/productModel');


const getProducts = async (req, res) => {
  try {
    const result = await productModel.find();
    res.render('shop', { domainName: domainName, arrr: result });
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching products: ${err.message}`);
  }
};



const moveProducttoedit = async (req, res) => {
  try {
    const result = await productModel.findById(req.params.id);
    res.render('1stShoes', { domainName: domainName, obj: result});
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching the product details: ${err.message}`);
  }
};


module.exports = { getProducts, moveProducttoedit};
