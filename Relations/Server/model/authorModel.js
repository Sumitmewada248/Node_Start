

const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    author:String,
    book:String,
    bookid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'book'}]
})

module.exports = mongoose.model('author',authorSchema)