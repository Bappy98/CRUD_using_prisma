const prisma = require('./../db/db.config')
const createUser = async(req,res)=>{
    const {name,email} = req.body
    console.log(name,email);
    
    try {
      const user = await prisma.user.create({
          data:{name:name,email:email}
      }) 
      console.log(user);
      
      res.status(201).json({
          message:"User created successfully",
          data:user
      })
    } catch (error) {
        
    }
}

const getUser = async(req,res)=>{
    try {
        const users = await prisma.user.findMany()
        res.status(200).json({
            message:"Users fetched successfully",
            data:users
        })
    } catch (error) {
        console.log(error);
        
    }
}

const getUserById = async(req,res)=>{
    const {id} = req.params
    try {
        const user = await prisma.user.findUnique({
            where:{id:Number(id)}
        })
        res.status(200).json({
            message:"User fetched successfully",
            data:user
        })
    } catch (error) {
        console.log(error);
        
    }
}

const updateUser = async(req,res)=>{
    const {id} = req.params
    const {name,email} = req.body
    try {
        const user = await prisma.user.update({
            where:{id:Number(id)},
            data:{name:name,email:email}
        })
        res.status(200).json({
            message:"User updated successfully",
            data:user
        })
    } catch (error) {
        console.log(error);
        
    }
}

const deleteUser = async(req,res)=>{
    const {id} = req.params
    try {
        const user = await prisma.user.delete({
            where:{id:Number(id)}
        })
        res.status(200).json({
            message:"User deleted successfully",
            data:user
        })
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}