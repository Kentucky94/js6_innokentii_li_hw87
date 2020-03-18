const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  try{
    const userData = req.body;
    const user = new User(userData);

    user.generateToken();

    await user.save();

    return res.send(user);
  }catch(error){
    res.status(400).send(error);
  }
});