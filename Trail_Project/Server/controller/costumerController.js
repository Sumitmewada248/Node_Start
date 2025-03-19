const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const costumerModel = require("../model/costumerModel");
const accountModel = require("../model/accountModel");
const transactionModel = require("../model/transactionModel");
const passwordCreator = require('../middleware/password');
const nodemailer = require("nodemailer");

require("dotenv").config();
const Registeration = async (req, res) => {

    const { name, email, address, city, mobile, pincode,accountType } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        var password = passwordCreator.generatePassword();
        console.log (password);
        const hashPassword = await bcrypt.hash(password, salt);
        const User = await costumerModel.create({
            name: name,
            email: email,
            address: address,
            city: city,
            mobile: mobile,
            pincode: pincode,
            password: hashPassword,
            accountType: accountType
        });
        const accountNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();
        const account = await accountModel.create({
            custoID: User._id,
          accountNumber: accountNumber,
        })
      
        await costumerModel.findByIdAndUpdate(User._id, { $set: { accountID: account._id } });

        res.send("Registration successful");
        
    } catch (err) {
        console.log(err);
        res.status(500).send("Error while creating user");
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:"sumitmewa@gmail.com",
            pass:"stpa cgoy inoh mjwz"

        }
    });

    // Send confirmation email
    const mailOptions = {
        from: 'sumitmewa@gmail.com',
        to: email,
        subject:` ${name} Your,Registration Confirmation`,
        text: ` hello ${name}\n Your registration was successful in MyBank!\n Your Passcode is ${password} \nThank you,\nTeam`
      
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
    });
    res.send("Registration successful");
};
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await costumerModel.findOne({ email });

        if (!User) {
            return res.status(401).send("Invalid Email!");
        }

        const passwordMatch = await bcrypt.compare(password, User.password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid Password!");
        }

        const token = await jwt.sign({ id: User._id }, process.env.SECRETE_KEY, { expiresIn: "1h" });
        
        return res.json({ token:token });
        
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
    res.send("Login successful");
};

const userAuthenticate = async (req, res) => {
    const token = req.header("x-auth-token");
    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    const User= await costumerModel.findById(verify.id).select("-password");
    res.send(User);
};

const Deposite=async(req,res)=>{
    try {
        const {amount,id}=req.body;
      const acc=await accountModel.findOne({custoID:id});
      const Tran=await transactionModel.create({accountID:acc._id,amount:amount,transactionType:"Deposite"});
      const newBalance=Number(acc.balance)+Number(amount);
      await accountModel.findByIdAndUpdate(acc._id,{$set:{balance:newBalance},$push:{transactionID:Tran._id}});
      res.send("Deposite");
    
      }
      catch (error) {
        res.status(500).send("Something went wrong")
      }
   
    //  const {amount,id}=req.body;
   
    //  const acc=await accountModel.find();
    //  const Tran=await transactionModel.create({accountID:acc._id,amount:amount,transactionType:"Deposite"});
    //  const newBalance=Number(acc.balance)+Number(amount);
    //  await accountModel.findByIdAndUpdate(acc._id,{$set:{balance:newBalance},$push:{transactionID:Tran._id}});
     
    // console.log(acc);
    // res.send("Deposite");
      

}

const resetPassword=async(req,res)=>{
    try {
      const {oldPassword,newPassword,id}=req.body;
    const salt = await bcrypt.genSalt(10);
    const newp = await bcrypt.hash(newPassword, salt);
    const User= await costumerModel.findById(id);
    const passwordMatch =  await bcrypt.compare(oldPassword, User.password);
    if (!passwordMatch)
    {
      return res.status(400).send("Invalid Old Password!");
    }
    else
    {
      await costumerModel.findByIdAndUpdate(id,{password:newp});
    }
    res.send("Reset Password");
    } catch (error) {
      res.status(500).send("Something went wrong")
    }  
    
    }
    
    
    const profile=async(req,res)=>{
    try {
      const {id}=req.body;
      const user=await costumerModel.findById(id).populate("accountID");
      console.log(user);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send("Something went wrong")
    }
    
    }
    
    const balance=async(req,res)=>{
      try {
        const {id}=req.body;
        const user=await costumerModel.findById(id).populate("accountID");
        res.status(200).send(user);
      } catch (error) {
        res.status(500).send("Something went wrong")
      }
      
      }

      
  const withdraw=async(req,res)=>{
    try {
      const {amount,id}=req.body;
      const acc=await accountModel.findOne({custoID:id});
    const Tran=await transactionModel.create({accountID:acc._id,amount:amount,transactionType:"Withdraw"});
    const newBalance=Number(acc.balance)-Number(amount);
    await accountModel.findByIdAndUpdate(acc._id,{$set:{balance:newBalance},$push:{transactionID:Tran._id}});
    res.send("withdraw");
    }
    catch (error) {
      res.status(500).send("Something went wrong")
    }
    
    }


    const transaction=async(req,res)=>{
      try {
        const {id}=req.body;
        const user=await accountModel.findOne({custoID:id}).populate("transactionID");
        console.log(user);
        res.status(200).send(user);
      } catch (error) {
        res.status(500).send("Something went wrong")
      }  
      }
    const Statement=async(req,res)=>{
      try {
        const {id, start, end} = req.body;
        const user = await accountModel.findOne({custoID:id}).populate({
          path: "transactionID",
          match: {
            createdAt: { $gte: new Date(start), $lt: new Date(new Date(end).setDate(new Date(end).getDate() + 1)) }
          }
        });
        res.status(200).send(user);
      } catch (error) {
        res.status(500).send("Something went wrong")
      }  

    }


module.exports = { Login,
    Registeration,
    userAuthenticate,
    Deposite,
    resetPassword,
    profile,
    balance,
    withdraw,
    transaction,
    Statement

 };

