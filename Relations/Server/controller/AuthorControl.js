
const AuthorModel = require('../model/authorModel');
const BookModel = require('../model/bookModel');

const dataInsert = async (req, res) => {
    const { author, book } = req.body;

    const authorData = await AuthorModel.create({
        author: author,
        book: book
    });
    res.status(200).json("Data Inserted");
}

const bookDisplay = async (req, res) => {
    const data = await AuthorModel.find();
    res.status(200).json(data);
}

const newBook = async (req, res) => {
    const { bookname, price, id } = req.body;
    const bookData = await BookModel.create({
        bookname: bookname,
        price: price,
        authorid: id
    });
    await AuthorModel.findByIdAndUpdate(id, { $push: { bookid: bookData._id }
    });
    res.status(200).json("Book Added");
}
const Display = async (req, res) => {
    const data = await AuthorModel.find().populate('bookid');
    res.status(200).json(data);
}

module.exports = {
    dataInsert,
    bookDisplay,
    newBook,
    Display

}