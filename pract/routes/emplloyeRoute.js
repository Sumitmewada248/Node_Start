
const express=require("express")
const route=express.Router()

route.get("/home",(req,res)=>{
    res.send("<h1>This is my home page</h1>")
})

route.get("/about",(req,res)=>{
    res.send("<h1>This is my about page</h1>")
})

route.get("/dept",(req,res)=>{
    res.send("<h1>About the dept</h1>")
})

route.get("/salary",(req,res)=>{
    res.send("<h1>About the salayar</h1>")
})

module.exports=route