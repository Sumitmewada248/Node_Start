

import { useState,useEffect } from "react";
import axios from "axios";

const Search=()=>{

    const [data,setdata]=useState([])
    const [rollno,setrollno]=useState("")

    const getdata=async()=>{
        let api=await`http://localhost:8080/students/getdata`
        axios.post(api,{roll:rollno}).then((res)=>{

            if(res.data.length==0){
                alert("No Data Found")
            }

            else{
                setdata(res.data)}
            })
        }
    
            

            const ans=data.map((key)=>{
                return(
                    <>
                    <tbody>
                        <tr>
                            <td>{key.rollno}</td>
                            <td>{key.name}</td>
                            <td>{key.city}</td>
                            <td>{key.fees}</td>
                        </tr>
                    </tbody>
                    </>
                )
            })

            return(
                <>

                <h1>Search Page</h1>
                Enter Rollno <input type="text" name="rollno" value={rollno} onChange={(e)=>{setrollno(e.target.value)}} /><br />
                <button onClick={getdata}>Search</button>

                <table border="1">
                    <thead>
                        <tr>
                            <th>Rollno</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    {ans}
                </table>
                </>
            )   
}
export default Search   