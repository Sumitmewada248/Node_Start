import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")

const navigate=useNavigate();




    const handelSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BASE_URL}/doctor/login`
        try {
            const response=await axios.post(api,{email:email,password:password})
            console.log(response.data)
            localStorage.setItem("name",response.data.name)
            localStorage.setItem("email",response.data.email)
            localStorage.setItem("doctorId",response.data._id)
            navigate("/doctordashboard")
            
            toast.success("Login Success")
        } catch (error) {
          toast.error(error.response.data.msg)
        }
    }
    return (
        <>
        <h1>Doctor Login</h1> <br />
 


        <Form>
            
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Email</Form.Label>
    <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    </Form.Group>

    
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Password</Form.Label>
    <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    </Form.Group>

    {error && <p style={{color:"red"}}>{error}</p>}

   
    </Form>
    <button onClick={handelSubmit}>Login</button>


        </> 
    );
}

export default Login;
