

const express=require('express');
const app=express();
const cors=require("cors")

app.use(cors())


app.use((req,res,next)=>{
    console.log("first middleware")
    next()

})

app.get("/myhome",(req,res)=>{
    console.log("home page ")
    res.send("home page")

})

app.get("/about",(req,res,next)=>{
    console.log("about page")
    res.send("about page")
    next()
})
app.use((req,res,next)=>{
    console.log("second middleware")
    next()
})

app.get("/service",(req,res)=>{
    console.log("service page")
    res.send("service page")
})


app.listen(3000,()=>console.log("server is running"))