
const prisma = require('../db/db.config')

async function addAuthor (name) {
    try {
        const newAuthor = await prisma.author.create({
            data:{
                name
            }
        })
        return newAuthor
    } catch (error) {
        console.error(error);
        
    }
}

module.exports = {addAuthor}