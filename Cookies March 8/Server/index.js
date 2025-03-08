const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser = require("body-parser")
const {config}=require("dotenv")
const cokieparser=require("cookie-parser")
const session=require("express-session")

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
    res.cookie("institute","VNS Group",{maxAge:1000000})
    res.cookie("city","pune")
       
    res.send("Inserted cookie")
})

app.get("/getcookie",(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})
app.get("/deletecookie",(req,res)=>{
    res.clearCookie("name")
    res.clearCookie("city")
    res.send("cookie deleted")
})



/// Session donot store value it can direct take the data
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))

app.get("/setsession",(req,res)=>{
    req.session.name="shubham"
    req.session.city="pune"
    res.send("session set")
})

app.get("/getsession",(req,res)=>{
    const{name,city}=req.session
    console.log(req.session)
    res.send( {name,city})
})



















app.listen(port,()=>{
    console.log("server started")
})