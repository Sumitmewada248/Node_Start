

import { useState,useEffect } from "react";
import axios from "axios";
import message from 'antd/lib/message';
import Table from 'react-bootstrap/Table';

const Search=()=>{

    const [input,setInput]=useState([])
    const [rollno,setrollno]=useState("")

    const getdata=async()=>{
        let api=await`http://localhost:3000/students/getdata`
        axios.post(api,{roll:rollno}).then((res)=>{

            if(res.data.length==0){
                message.error("Data Not Found")
            }

            else{
                setInput(res.data)}
                console.log(res.data);
                
            })
        }
    
            

          let ans=input.map((key)=>{
                return(
                    <>
                    
                        <tr>
                            <td>{key.rollno}</td>
                            <td>{key.name}</td>
                            <td>{key.city}</td>
                            <td>{key.fees}</td>
                        </tr>
                    
                    </>
                )
            })

            return(
                <>
          <center>
            <h1 style={{ fontSize: "40px", color: "#333", margin: "20px 0" ,backgroundColor:"green",padding:"20px",height:"100px",textAlign:"center",color:"white" ,margin:"0px",}}>Search Page</h1>
        
          
           
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid black",padding:"10px",margin:"20px auto",width:"400px",borderRadius:"10px"}}>
                    <h3>Search Rollno</h3>
                    <input type="text" name="rollno" value={rollno} onChange={(e)=>{setrollno(e.target.value)}} style={{width:"200px",padding:"10px",margin:"10px",borderRadius:"10px"}}/>
                    <button onClick={getdata} style={{backgroundColor:"green",color:"white",borderRadius:"10px",padding:"10px"}}>Search</button>
                </div>
                <br /><br /></center>
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
            )   
}
export default Search   