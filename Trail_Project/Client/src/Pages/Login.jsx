import { useState,useEffect } from "react"
import axios from "axios"
import BASE_URL from "../config"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Login=()=>{
const[input,setInput]=useState("")
const navigate=useNavigate()

const handleInput=(e)=>{
    const name=e.target.name;
     const value= e.target.value 

     setInput({...input,[name]:value})

}

const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BASE_URL}/bank/login`
     try {
        const response=await axios.post(api,input)
        console.log(response.data)

        localStorage.setItem("token",response.data.token)
     } catch (error) {
        console.log(error)
     }

navigate("/Dashboard/dashome")
}

    return(
 <>
 

 <h1 id="head">Customer Login</h1>

 <div id="login">

 Enter Email Id:<input type="text" name="email" onChange={handleInput}/><br/>
 Enter Password:<input type="password" name="password" onChange={handleInput}/><br/>
 <button onClick={handleSubmit} >Submit</button><br />


 If You Don't Have account <Link to="/register">Click Here!</Link>
 </div>

    </>

    )
}

export default Login