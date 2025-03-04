const model = require("../model/UserModel")


const datasave = async(req , res)=>{
   const{name , email , city , imgurl} = req.body;
   const data = await model.create({
    name : name,
    email : email,
    city : city,
    imgurl: imgurl
   })
   res.status(200).send(data)
}
const display = async(req, res)=>{
    let data = await model.find()
    res.send(data)
}




module.exports = {
    datasave,
    display
}