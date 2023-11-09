const mongoose = require('mongoose');

const BookInfo = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  summary: { type: String },
});

module.exports =  mongoose.model('bookInfo', BookInfo);;