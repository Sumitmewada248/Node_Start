import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';

const Topbar=()=>{
      
     const [input,setInput]=useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setInput({...input,[name]:value})
    console.log(input)
    
    }

    const handelSubmit=async(e)=>{
        e.preventDefault();
        

        let api=`${BASE_URL}/doctor/register`
        try {
            const response=await axios.post(api,input)
            console.log(response)
            alert("data Inserted")

            
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <>
           <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Doctor E-Appointment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing" onClick={handleShow}>Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Doctor Name</Form.Label>
    <Form.Control type="text" name="name" onChange={handelInput} />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Address</Form.Label>
    <Form.Control type="text" name="address" onChange={handelInput} />
    </Form.Group>



    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Mobile no</Form.Label>
    <Form.Control type="text" name="mobile" onChange={handelInput} />
    </Form.Group>



    </Form>





        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handelSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Topbar