const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const Post = require('../models/Post');
const auth = require('../middleware/auth');
const config = require('../config');

const router = express.Router();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  },
  destination: (req, file, cb) => {
    cb(null, config.uploadPath)
  }
});

const upload = multer({storage});

router.post('/', [auth, upload.single('image')], async (req, res) => {
  try{
    const user = req.user;
    const postData = req.body;

    if(req.file){
      postData.image = req.file.filename;
    }else{
      postData.image = 'noimage.jpg';
    }
    postData.user = user._id;

    const post = new Post(postData);
    await post.save();

    res.send(post);
  }catch(error){
     return res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try{
    const posts = await Post.find().populate({path: 'user', select: 'username'});

    res.send(posts);
  }catch(e){
    return res.send(error);
  }
});

router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findOne({_id: req.params.postId});

    res.send(post);
  }catch(error){
    res.status(400).send(error);
  }
});

module.exports = router;