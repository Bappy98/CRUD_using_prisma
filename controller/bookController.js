const bookService = require('../services/bookService')

exports.addNewBook = async (req,res) =>{
    try {
        const {title,publishedDate,author_id} = req.body 

        console.log(title);
        

        const book = await bookService.addBook(title,new Date(publishedDate),author_id) 
        res.status(201).json(book)

    } catch (error) {
        res.status(400).json({error:error.massage})
    }
}

exports.getBooks = async (req,res) =>{
    try {
        console.log(jfhfh);
        
        const books = await bookService.getAllBooks()
        console.log(books);
        
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({error:error.massage})
    }
}

exports.getBookById = async (req,res) =>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.massage})
    }
}
exports.updateBook = async (req,res) =>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.massage})
    }
}

exports.deleteBook = async (req,res) =>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.massage})
    }
}

