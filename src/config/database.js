require("dotenv").config()
const mongoose = require("mongoose")
const db = process.env.MONGOOSE_KEY
const conncetdb = async ()=>{
    await mongoose.connect(db)
}