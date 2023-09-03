const { response } = require("express")
const { blogUser } = require("../Models/user.model")
const { use } = require("../Routes/user.routes")

// create controller

const create = async (req,res)=>{
    try {
        const user = await blogUser.findOne({
            username : req.body.username,
        })
        if(user){
            return res.status(400).send({
                success : false,
                message : "User is alrady exists"
            })
        }
        const newUser = new blogUser({
            username : req.body.username,
            password : req.body.password
        })
        await newUser.save()
        .then((user)=>{
            return res.status(201).send({
                success : true,
                message : "User is create successfully",
                user : {
                    id : user._id,
                    username : user.username
                }
            })
        }).catch((error)=>{
            return res.status(401).send({
                success : false,
                message : error.message
            })
        })
    } catch (error) {
        res.status(401).send({
            success : false,
            message : error.message
        })
    }
}

// read controller


const read = async (req,res)=>{
    try {
        const newuser = await blogUser.find();
        if(newuser){
            res.status(200).send({
                success : true,
                message : "User read successfully",
                user : newuser
            })
        }
    } catch (error) {
        res.status(401).send({
            success : false,
            message : error.message
        })
    }
}
    
   

// delets routes

const delet = async (req,res)=>{
    try {
        const id = req.params.id
        const userdelete = await blogUser.deleteOne({
            _id : id
        })
        if(userdelete){
            return res.status(200).send({
                success : true,
                message : "delete successsfully"
            })
        }
    } catch (error) {
        res.status(401).send({
            success : false,
            message : error.message
        })
    }
}

// update 

const update = async (req,res)=>{
    try {
        const id = req.params.id
        const username = req.body.username
        const password = req.body.password
        const userupdate = await blogUser.findByIdAndUpdate({
            _id : id
        },{
            $set : {
                username : username,
                password : password
            }
        },{
            new : true
        })

        if(userupdate){
            return res.status(200).send({
                success : true,
                message : "Update successfully",
                data : userupdate
            })
        }

    } catch (error) {
        res.status(401).send({
            success : false,
            message : error.message
        })
    }
}




module.exports = {create,read,delet,update }