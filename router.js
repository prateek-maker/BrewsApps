const router = require('express').Router()

const BookController = require('./bookController')

router.post('/saveBooksDetails',(...args) =>BookController.saveBookDetails(...args)) 
router.get('/viewAllBookDetails',(...args) =>BookController.viewAllBookDetails(...args)) 
router.get('/viewBooksDetails/:bookId',(...args) =>BookController.viewSpecificBookDetail(...args)) 
router.put('/updateBookDetail/:bookId',(...args) =>BookController.updateBookDetails(...args)) 
router.delete('/deleteBookDetail/:bookId',(...args) => BookController.deleteBookDetails(...args)) 

module.exports = router