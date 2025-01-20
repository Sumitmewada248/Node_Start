
const express=require("express")
const route=express.Router()

route.get("/home",(req,res)=>{
    res.send("<h1>This is my home program</h1>")
})

route.get("/about",(req,res)=>{
    res.send("<h1>This is my about program</h1>")
})

route.get("/contact",(req,res)=>{
    res.send("<h1>This is my contact program</h1>")
})

route.get("/fees",(req,res)=>{
    res.send("<h1>This is my fees program</h1>")
})

module.exports=route