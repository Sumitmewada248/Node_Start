const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser = require("body-parser")
const Router=require("./route/authoreRoute")
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/onetomany").then(()=>{
    console.log("connected")
})

app.use("/writter",Router)

const port=5000
app.listen(port,()=>{
    console.log("server started")
})