 import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Login = () => {

    const [mydata,setMydata]=useState("")
    const navigate=useNavigate()



    const handleInput=async(e)=>{
        const name=e.target.name
        const value=e.target.value 
    
        setMydata((values)=>({...values, [name]:value}))
    
    }
    const handleSubmit=async(e)=>{
        let api=`http://localhost:5000/user/login`
        const response=await axios.post(api,mydata)
        console.log(response.data)
        alert("Login success")
     
        navigate("/home")
        
    
    
    }
    return (
        <>
            <h1>Login</h1>
            Enter Email: <input type="text" name="email"   onChange={handleInput} />  <br />
            Enter Password: <input type="password" name="password"  onChange={handleInput}  />  <br />


            <button onClick={handleSubmit}>Login</button>



        </>
    )
}

export default Login