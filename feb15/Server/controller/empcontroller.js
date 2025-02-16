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

module.exports={userResgister}
