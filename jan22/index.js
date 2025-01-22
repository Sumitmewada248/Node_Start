const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/colllege")
const collegeRoute=require("./Routes/collegeRoute")
app.set("view engine","ejs" )
app.use("/college",collegeRoute)

app.listen(8800,()=>{
    console.log("server is running on port 8800")
})