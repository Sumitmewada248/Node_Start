const DoctorModel= require("../model/doctorModel");


const registerDoctor=async(req, res)=>{
    const {name,address, mobile, speciality, email, password} = req.body; 
    try {
        const Doctor = await DoctorModel.create({
            name:name,
            address:address, 
            mobile:mobile,
            speciality:speciality,
            email:email,
            password:password
        })

        res.status(201).send({msg:"Doctor Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }



}

const DoctorsDisplay=async(req, res)=>{
    try {
        const Doctor = await DoctorModel.find();
        res.status(200).send(Doctor);
    } catch (error) {
        res.status(400).send({msg:"Data base not Work"})
    }
}

const loginDoctor=async(req, res)=>{
    console.log(req.body);
    const {email, password} = req.body; 
    try {
        const Doctor = await DoctorModel.findOne({email:email,password:password});
        if(!Doctor){
            res.status(200).send({msg:"Invalid Email "});
        }
        if(Doctor.password!=password){
            res.status(200).send({msg:"Invalid Password"});
        }



    } catch (error) {
        console.log(error);
    }


}

const DoctorSearch=async(req, res)=>{
    const {name, speciality} = req.body;
 const Doctor = await DoctorModel.find({$or:[{"name":name,"speciality":speciality}]});
 console .log(Doctor);
 res.status(200).send(Doctor);
}

module.exports={
    registerDoctor,
    DoctorsDisplay,
    loginDoctor,
    DoctorSearch

}