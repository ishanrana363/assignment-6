const express = require('express')
const route  = require('./src/Routes/user.routes')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/v1",route)

// base routes

app.get("/",(req,res)=>{
    res.send("Welcome to my server")
})

// routes not found

app.use((req,res,next)=>{
    res.status(404).send({
        success : false,
        message : "Router not found"
    })
})

// error handling

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

module.exports = app