const User = require("../Models/blog")

const create = async (req,res) =>{
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if(user){
            return res.status(400).send({
                success : false,
                message : "User is already exists"
            })
        }
        const newUser = new User({
            username : req.body.username,
            password : req.body.password,
        })
        await newUser.save()
        .then((user)=>{
            res.status(201).send({
                success : true,
                message : "User is create",
                user : {
                    id : user._id,
                    username : user.username,
                }
            })
        }).catch((err)=>{
            return res.status(401).send({
                success : false,
                message : err.message
            })
        })
    } catch (error) {
        res.status(401).send({
            success : false,
            message : error.message
        })
    }
}

module.exports = {create}