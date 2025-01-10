const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const passwordSchema = require("../models/PasswordModel");
const JWT_SECRET = 'IamSecret';

const getPasswords = async (req, res) => {
  try {
    const passwords = await passwordSchema.find();
    res.send({ success: true, data: passwords });
  } catch (error) {
    res.status(400).send({ success: false, error: error?.message });
  }
};

const addPassword = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    
    const decodedToken = jwt.decode(token, JWT_SECRET )

    console.log('Decoded token', decodedToken)
    
    const { site_url, acc_username, acc_password } = req.body;
    console.log(site_url, acc_username, acc_password)
    const hashedPassword = await bcrypt.hash(acc_password, 10);
    const newPassword = await passwordSchema.create({
      user_id :decodedToken.id,
      site_url,
      acc_username,
      acc_password: hashedPassword,
    });
    res.send({ success: true, data: newPassword });
  } catch (error) {
    res.send({ success: false, error: error?.message });
  }
};

const editPassword = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const newPassword = await bcrypt.hash(body.acc_password, 10);
    const editedPassword = await passwordSchema.findByIdAndUpdate(
      id,
      { ...body, acc_password: newPassword },
      { new: true }
    );
    res.send({ success: true, editedPassword });
  } catch (error) {
    res.send({ success: false, error: error?.message });
  }
};

const deletePassword = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPassword = await passwordSchema.findByIdAndDelete(id);
    res.status(200).send({ success: true, deletedPassword });
  } catch (error) {
    res.status(400).send({ success: false, error: error?.message });
  }
};

module.exports = {
  addPassword,
  editPassword,
  getPasswords,
  deletePassword,
};
