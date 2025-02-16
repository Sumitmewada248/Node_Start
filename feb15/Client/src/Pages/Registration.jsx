import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd'

const Registration = () => {

const[input,setInput]=useState({})

const handleInput=(e)=>{
    let name=e.target.name
    let value=e.target.value

    setInput(values=>({...values,[name]:value}))
}

const handleSubmit=(e)=>{
    e.preventDefault()
    let api='http://localhost:5000/user/registration';
    axios.post(api,input)
    .then((res)=>{
        message.success(res.data.msg)
    })
    
}
    return (
        <>

        <h1>Resgister Here</h1>
        <br /> <hr /><br />
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput} />
       
      </Form.Group>


      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={handleInput} />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" name='number' value={input.number} onChange={handleInput} />
       
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' value={input.password} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      

     



      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        
        </>
    )
}

export default Registration