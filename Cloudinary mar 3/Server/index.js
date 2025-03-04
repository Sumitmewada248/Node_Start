const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser = require("body-parser")
const {config}=require("dotenv")
const router=require("./route/userRoute")

require("dotenv"),config()
const port=process.env.PORT||5000

mongoose.connect(process.env.DBCONNECT).then(()=>{
    console.log("db connected")

})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())
app.use("/user",router)


app.listen(port,()=>{
    console.log("server started")
})