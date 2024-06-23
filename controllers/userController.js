const express = require('express');
const router = express.Router();
const domainName = 'qjv19z68-8080.euw.devtunnels.ms';
const moment = require('moment'); 
const userModel = require('../models/userModel');


// ban get al users fal table bata3 al admin
const getUsers = async (req, res) => {
  try {
    const result = await userModel.find();
    res.render('AdminU', { domainName: domainName, arr: result, moment: moment /* timestamp handling */ });
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching users: ${err.message}`);
  }
};


const createUser = async (req, res) => {
  try {
    await userModel.create(req.body);
    res.redirect("/AdminU");
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while creating the user: ${err.message}`);
  }
};


const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.redirect("/AdminU");
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while deleting the user: ${err.message}`);
  }
};

// ban get al data fal edit page
const moveUsertoedit = async (req, res) => {
  try {
    const result = await userModel.findById(req.params.id);
    res.render('AdminUedit', { domainName: domainName, obj: result, moment: moment });
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while fetching the user details: ${err.message}`);
  }
};

// update ba3d ma 7atana al data fal edit page
const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    await userModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/AdminU");
  } catch (err) {
    console.error(err);
    res.status(500).send(`An error occurred while updating the user: ${err.message}`);
  }
};
/*********************************************************************************************/
module.exports = { getUsers, createUser, deleteUser, moveUsertoedit, updateUser };
