require("dotenv").config()
const mongoose = require("mongoose")
const db = process.env.MONGOOSE_KEY
const conncetdb = async ()=>{
    try {
        await mongoose.connect(db)
        console.log("db is connect")
    } catch (error) {
        console.log(error)
    }
}
module.exports = conncetdb