const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: !this.image,
  },
  image: {
    type: String,
    required: !this.description,
  },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
    default: Date.now(),
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;