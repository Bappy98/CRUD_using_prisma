const prisma = require('../db/db.config')
async function addBook(title,publishedDate,author_id){
    try {
        const newBook = await prisma.book.create({
            data:{
                title,
                publishedDate,
                author:{
                    connect: {id:Number(author_id)}//Number(author_id)
                }
            },
            include:{author:true}
        })
        return newBook
    } catch (error) {
        console.error(error);
        
    }
}

async function getAllBooks () {
    try {
        const book = await prisma.book.findMany({
            include:{author:true}
        })
        return book
    } catch (error) {
        console.error(error);
        
    }
}

async function getBookById (id) {
    try {
        const book = await prisma.book.findUnique({
            where:{
                id
            },
            include:{author:true}
        })
        if(!book){
            throw new Error("Book not found")
        }

        return book
    } catch (error) {
        console.error(error);
        
    }
}

async function updateBook (id,newTitle) {
    try {
             const book = await prisma.book.findUnique({
            where:{
                id
            },
            include:{author:true}
        })
        if(!book){
            throw new Error("Book not found")
        }
        const updateBook = await prisma.book.update({
            where:{id},
            data:{
                title:newTitle
            },
            include:{
                author:true
            }
        })
        return updateBook
    } catch (error) {
        console.error(error);
        
    }
}

async function deleteBook(id) {
    try {
        const deletedBook = await prisma.book.delete({
            where:{id},
            include:{author:true}
        })

        return deletedBook
        
    } catch (error) {
        console.error(error);
        
    }
}


module.exports = {addBook,getAllBooks,getBookById,updateBook,deleteBook}