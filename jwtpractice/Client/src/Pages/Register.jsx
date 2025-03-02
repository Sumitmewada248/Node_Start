import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Register = () => {
const[user, setUser] = useState({})
const navigate=useNavigate()


const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser((values)=>({...values, [name]:value}))
    console.log(user)
    
}

const handleSubmit =async (e) => {
    e.preventDefault()
    let api=`http://localhost:5000/user/register`
    const response = await axios.post(api, user)
    console.log(response.data)
    alert ("Registered Successfully")

    navigate("/login")
}

    return (
        <>
            <h1>Register</h1>
            Enter Name: <input type="text" name="name"  onChange={handleInput} />  <br />
            Enter Email: <input type="text" name="email"  onChange={handleInput} />  <br />
            Enter Password: <input type="password" name="password"  onChange={handleInput}  />  <br />


            <button onClick={handleSubmit}>Register</button>
        </>
    )
}   

export default Register