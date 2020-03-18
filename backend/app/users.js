const express = require('express');

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
    return res.status(400).send(error);
  }
});

router.post('/sessions', async(req, res) => {
  try{
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username});
    if(!user) return res.status(400).send({error: 'This user is not registered'});

    const isMatch = await user.comparePasswords(password);
    if(!isMatch) return res.status(400).send({error: 'Invalid password'});

    user.generateToken();
    await user.save();

    return res.send(user);
  }catch{
    return res.status(400).send(error);
  }
});

module.exports = router;