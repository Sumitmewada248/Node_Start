
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const  userModel = require("../module/userModule")
require("dotenv").config()

const Register = async (req, res) => {
    
    const {name, email, password} = req.body
    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)
    const user = await userModel.create({
        name:name,
         email:email,
         password:hashPassword
    })
    res.status(200).send(user)
}

const Login=async(req,res)=>{
    const {email, password} = req.body;
    const User= await userModel.findOne({email:email});
     
    if (!User)
    {
        res.send("Invalid Email!!!");
    }
    const passwordMatch = await bcrypt.compare(password, User.password);
   
    if (!passwordMatch)
    {
        res.send("Invalid Password!")
    }

    const token = await jwt.sign({id:User._id}, process.env.MY_SECRETE, { expiresIn: '7 days' })
    console.log(token);   
   res.send({token:token});;


}

const Authentic=async(req,res)=>{
    const token=req.header("x-auth-token")
    console.log(token)

    const verify=await jwt.verify(token,process.env.MY_SECRETE)
    console.log(verify)
    const user=await userModel.findById(verify.id).select("-password")
    res.send(user)

}

module.exports = {
    
    Register,
    Login,
    Authentic

}