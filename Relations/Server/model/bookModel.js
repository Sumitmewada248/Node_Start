

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname: String,
    price: String,
    authorid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author'
    }
});

module.exports = mongoose.model('book', bookSchema);