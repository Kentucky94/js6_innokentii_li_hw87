const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const users = require('./app/users');
const posts = require('./app/posts');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const run = async () => {
  await mongoose.connect(config.database, config.databaseOptions);

  app.use('/users', users);
  app.use('/posts', posts);

  app.listen(config.port, () => {
    console.log('Please try ' + config.port);
  })
};

run().catch(error => {
  console.log(error);
});