const express = require('express')
const router = express.Router()
const bookController = require('../controller/bookController')

router.get('/books', bookController.getBook)

router.post('/books', bookController.postBook)

router.get('/books/:id', bookController.getOneBook)

router.delete('/books/:id', bookController.deleteBook)

router.put('/books/:id', bookController.updateBook)

module.exports = router

