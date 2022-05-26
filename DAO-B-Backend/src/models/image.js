const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../config/mongo-file');

const imageSchema = new mongoose.Schema({
  name: String,
  description: String,
  image:
    {
      data: Buffer,
      contentType: String,
    },
});

const Image = mongoose.model('images', imageSchema);

module.exports = Image;
