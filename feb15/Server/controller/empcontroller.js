const empmodel=require('../modle/empmodel')


const userResgister=async(req,res)=>{
const {name,email,phone,password}=req.body
const user=await empmodel.create
(

    
    {
   name: name,
    email:email,
    phone:phone,
   password: password}
)

res.send({msg:"you are registered successfully"})


}
const userLogin=async(req,res)=>{
    const {email,password}=req.body
    try {
        const Employee=await empmodel.findOne({email:email})
         
        if(!Employee){
            res.status(404).send({msg:"user not found"})
        }


        if(Employee.password!=password){
            res.status(400).send({msg:"wrong password"})
        }
    
            res.status(200).send({Employee})
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={
    userResgister,
    
    userLogin}
