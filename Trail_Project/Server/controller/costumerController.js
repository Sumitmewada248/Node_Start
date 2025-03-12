const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const costumerModel = require("../model/costumerModel");
const passwordCreator = require('../middleware/password');
const nodemailer = require("nodemailer");

require("dotenv").config();
const Registeration = async (req, res) => {
    console.log(req.body);
    const { name, email, address, city, mobile, pincode } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        var password = passwordCreator.generatePassword();
        console.log(password)
        const hashPassword = await bcrypt.hash(password, salt);
        const User = await costumerModel.create({
            name: name,
            email: email,
            address: address,
            city: city,
            mobile: mobile,
            pincode: pincode,
            password: hashPassword
        });
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
};


const Login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);

    try {
        const User = await costumerModel.findOne({email:email});
        console.log(User);
        if (!User) {
            return res.status(401).send("Invalid Email!!!");
        }

        const passwordMatch = await bcrypt.compare(password, User.password);
        if (!passwordMatch) {
            return res.status(401).send("Invalid Password!");
        }

        const token = await jwt.sign({ id: User._id }, process.env.SECRETE_KEY);
        console.log(token);
        res.send({ token:token });
        res.send("jj")
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

   const userAuthenticate = async (req, res) => {

    const token = req.header("x-auth-token");
    console.log(token);
    

    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    console.log(verify);
    const User= await costumerModel.findById(verify.id).select("-password");
    
    res.send(User);
  }


module.exports = { Login,
    Registeration,
    userAuthenticate

 };

