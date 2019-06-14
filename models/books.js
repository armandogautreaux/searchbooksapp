const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const books = new Schema({
  title: { type: String, required: true }
});

const Book = mongoose.model('Book', books);
module.exports = Book;
