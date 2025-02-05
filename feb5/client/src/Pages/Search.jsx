import { useState,useEffect } from "react";
import axios from "axios";


import Table from 'react-bootstrap/Table';


const  Search = () => {
const[data,setData]=useState([])
const[rollno,setRollno]=useState("")

const getdata=async()=>{
    let api= `http://localhost:3000/students/data`
   const res=await axios.post(api,{roll:rollno}).then((res)=>{

        if(res.data.length==0){
            alert("No Data Found")
        }
        else{
            setData(res.data)
        }
    })
}
    const ans = data.map((item) => (
        <tr key={item.rollno}>
            <td>{item.rollno}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.fees}</td>
        </tr>
    ));





    return (
        <>
            <h1>Search</h1>
            
            Enter Rollno:<input type="text" name="rollno" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
            <button onClick={getdata}>Search</button>
                
                
            <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
    <tbody>
        {ans}
    </tbody>
    
 
    </Table>


  </>
    );
}

export default Search