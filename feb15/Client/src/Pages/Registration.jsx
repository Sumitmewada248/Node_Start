import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

const Registration = () => {

    const [input, setInput] = useState({})

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let api = 'http://localhost:5000/user/registration';
        axios.post(api, input)
            .then((res) => {
                message.success(res.data.msg)
            })
    }

    return (
        <div className="container" style={{ marginTop: '20px', marginBottom: '20px', maxWidth: '600px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)',boxShadow: ' 6px 6px black' }}>
            <h1 style={{ textAlign: 'center', color: '#333', fontFamily: 'Arial, sans-serif' }}>Register Here</h1>
            <br /> <hr /><br />
            <Form style={{ marginLeft: '20px', marginRight: '20px' }}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ fontWeight: 'bold', color: '#555' }}>Enter Name</Form.Label>
                    <Form.Control type="text" name='name' value={input.name} onChange={handleInput} style={{ width: '100%', padding: '10px', borderColor: '#ccc' }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: 'bold', color: '#555' }}>Email address</Form.Label>
                    <Form.Control type="email" name='email' value={input.email} onChange={handleInput} style={{ width: '100%', padding: '10px', borderColor: '#ccc' }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label style={{ fontWeight: 'bold', color: '#555' }}>Mobile Number</Form.Label>
                    <Form.Control type="number" name='number' value={input.number} onChange={handleInput} style={{ width: '100%', padding: '10px', borderColor: '#ccc' }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: 'bold', color: '#555' }}>Password</Form.Label>
                    <Form.Control type="password" name='password' value={input.password} onChange={handleInput} style={{ width: '100%', padding: '10px', borderColor: '#ccc' }} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit} style={{ width: '100%', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Registration

