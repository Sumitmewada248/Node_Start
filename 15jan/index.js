const { log } = require("console")
const express=require("express")

const app=express()
app.get("/",(req,res)=>{
    res.send("<h1>raja</h1>")
})

app.get("/Home",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})


app.listen(4000,()=>{
    console.log("server started")
})