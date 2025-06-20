const express = require('express')
const authorController = require('./../controller/authorController')
const bookController = require('./../controller/bookController')

const router = express.Router()

router.post('/add-author',authorController.addAuthor)
router.post('/add-book',bookController.addNewBook)
router.get('/get-books',bookController.getBooks)
router.get('/get-book/:id',bookController.getBookById)
router.put('/update-book/:id',bookController.updateBook)
router.delete('/delete-book/:id',bookController.deleteBook)


module.exports = router