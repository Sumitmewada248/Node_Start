import { useState,useEffect } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { message } from "antd";



const Update = () => {
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

    const ans=input.map((item)=>{
        return(
            <>

           <tr>
            <td>{item.rollno}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.fees}</td>
            <td id="edit"> <MdEdit /></td>
            <td id="delete" onClick={()=>{handelDelete(item._id)}} > <MdDelete />
            </td>
           </tr>
            </>

        )
    })

    return (
        <>
        <center> <h1>Update Data</h1></center>
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