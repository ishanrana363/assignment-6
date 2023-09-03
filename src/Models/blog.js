const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model("blog",blogSchema)
module.exports = Blog