

const express=require('express');
const app=express();
const cors=require("cors")
const middle=require("./middleware/mymiddle")
app.use(cors())
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



app.get("/myhome",(req,res)=>{
    // const status=false;
    // if(status){
    //     console.log("success")
    //     res.status(200).send("success")
    // }
    // else{
     
    //     res.status(401).send("home page failed")
    //     console.log("home page failed")
    // }

    try {
        console.log("home page")
        throw new Error("home page failed ")
        res.status(200).send("home perfectly run")
        
    } catch (error) {
        res.status(400).send({msg:"server not connected with database"});
        
    }

})



app.listen(3000,()=>console.log("server is running"))
