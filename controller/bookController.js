const Book = require('../model/Book')

const getBook = async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1})
        res.status(200).render("index", {books})
    } catch (error) {
        console.log(error)
        res.status(500).json({mssg: error.message})
    }
}

const postBook = async (req, res) => {
    const {title, author, rating } = req.body
    try {
       const book = await Book.create({title, author, rating })
       res.status(200).redirect("/books")
        
    } catch (error) {
        console.log(error)
        res.status(400).json({mssg: error.message})
    }   
}

const getOneBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findById(id)
        res.status(200).render('details', {book})
    } catch (error) {
        res.status(400).render('404')
    }
}

const deleteBook =  async (req, res) => {
    const id = req.params.id
    try {   
        const book = await Book.findByIdAndDelete(id)
        res.status(200).redirect('/books')
    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
}

const updateBook = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Book.findByIdAndUpdate(id, req.body)
        res.status(200).redirect('/books')
    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
}

module.exports = {
    getBook,
    postBook,
    getOneBook,
    deleteBook,
    updateBook
}