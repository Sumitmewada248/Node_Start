const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser = require("body-parser")
const {config}=require("dotenv")
const cokieparser=require("cookie-parser")

require("dotenv"),config()
const port=process.env.PORT||5000

mongoose.connect(process.env.DBCONNECT).then(()=>{
    console.log("db connected")

})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())
app.use(cokieparser())


app.get("/cookie",(req,res)=>{
    res.cookie("name","shubham")
    res.cookie("institute","VNS Group",{maxAge:10000})
       
    res.send("Inserted cookie")
})

app.get("/getcookie",(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})
app.get("/deletecookie",(req,res)=>{
    res.clearCookie("name")
    res.send("cookie deleted")
})






















app.listen(port,()=>{
    console.log("server started")
})