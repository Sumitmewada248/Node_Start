

const userModel=require("../model/userModel");
const profileModel=require("../model/profileModel");

const insertUser=async(req,res)=>{
    const {username,email,firstname,lastname}=req.body;

    const user=await userModel.create({
        username:username,
        email:email
    });
    const profile=await profileModel.create({
        firstname:firstname,
        lastname:lastname,
        userId:user._id
    });
    res.json({user,profile});
}

const displayUser=async(req,res)=>{
    const Data=await profileModel.find().populate("userId");
    res.send(Data);
}

module.exports={
    insertUser,
    displayUser
};
    