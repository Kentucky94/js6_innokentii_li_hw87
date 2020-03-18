const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const run = async () => {
  await mongoose.connect(config.database, config.databaseOptions);

  app.listen(config.port, () => {
    console.log('Please try ' + config.port)
  })
};

run().catch(error => {
  console.log(error)
});