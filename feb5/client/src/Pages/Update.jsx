import { useState,useEffect } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


const Update = () => {
    const navigate=useNavigate()
    
    const [input,setInput]=useState([])
    const getdata=()=>{
        let api=("http://localhost:3000/students/dataupdate")
        axios.get(api).then((res)=>{
            setInput(res.data)})
    }

    useEffect(()=>{
        getdata()
    },[])

     const handelDelete=(id)=>{
        let api=("http://localhost:3000/students/deletedata")
        axios.post(api,{id:id}).then((res)=>{
            message.success(res.data)
            getdata()
        })
    }


    const handelEdit=(id)=>{
        navigate(`/edit/${id}`)
    }


    const ans=input.map((item)=>{
        return(
            <>

           <tr>
            <td>{item.rollno}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.fees}</td>
            <td id="edit" > <MdEdit   onClick={()=>{handelEdit(item._id)}}/></td>
            <td id="delete"  > <MdDelete onClick={()=>{handelDelete(item._id)}} />
            </td>
           </tr>
            </>

        )
    })

    return (
        <>
        <center>    <h1 style={{ fontSize: "40px", color: "#333", margin: "20px 0" ,backgroundColor:"green",padding:"20px",height:"100px",textAlign:"center",color:"white" ,margin:"0px",}}>Update Page</h1></center>
        <hr/>
            

            <Table striped bordered hover id="table" >
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {ans}
        </tbody>
 
    </Table>

          

        </>
    );
};

export default Update;