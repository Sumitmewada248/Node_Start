import { useState } from "react"
import axios from "axios"



const Insert = () => {
    const [data,setData]=useState({} )
    const handleInput=(e)=>{
      const  name=e.target.name
      const  value=e.target.value
        setData({...data,[name]:value})
        console.log(data)

    }

    const handleInsert= async() =>{
        let api="http://localhost:8000/worker/insert"
        const response=await axios.post(api,data)
        console.log(response.data)
        alert("data inserted")
        
        
    }
    return (
        <>
        Enter Username: <input type="text" name="name" value={data.name} onChange={handleInput} /><br/>
        Enter Email: <input type="text" name="email" value={data.email} onChange={handleInput} /><br/>
        Enter First Name: <input type="text" name="password" value={data.password} onChange={handleInput}/><br/>
        Enter Last Name: <input type="text" name="mobile" value={data.mobile} onChange={handleInput}/><br/>
        <button onClick={handleInsert}>Insert</button>
        </>
    )
}

export default Insert