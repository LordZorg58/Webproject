const express = require('express');
const router = express.Router();
const domainName = 'qjv19z68-8080.euw.devtunnels.ms';
const moment = require('moment'); 
const productModel = require('../models/productModel');


const getProducts = async (req, res) => {
  try {
    const result = await productModel.find();
    res.render('Admin', { domainName: domainName, arr: result, moment: moment /*bat3at al timestamp */ });
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching products: ${err.message}`);
  }
};


const createProduct = async (req, res) => {
  try {
    await productModel.create(req.body);
    res.redirect("/Admin");
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while creating the product: ${err.message}`);
  }
};


const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.redirect("/Admin");
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while deleting the product: ${err.message}`);
  }
};


const moveProducttoedit = async (req, res) => {
  try {
    const result = await productModel.findById(req.params.id);
    res.render('Adminedit', { domainName: domainName, obj: result, moment: moment });
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching the product details: ${err.message}`);
  }
};


const updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/Admin");
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while updating the product: ${err.message}`);
  }
};

/*********************************************************************************************/
module.exports = { getProducts, createProduct, deleteProduct, moveProducttoedit, updateProduct };
