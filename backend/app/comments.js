const express = require('express');

const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try{
    const user = req.user;

    const commentData = req.body;
    commentData.user = user._id;

    const comment = new Comment(commentData);

    await comment.save();

    res.send(comment);
  }catch(error){
    return res.status(400).send(error);
  }
});

router.get('/:postId', async (req, res) => {
  try{
    const comments = await Comment.find({post: req.params.postId}).populate({path: 'user', select: 'username'});

    res.send(comments);
  }catch(error){
    return res.status(400).send(error);
  }
});

module.exports = router;

