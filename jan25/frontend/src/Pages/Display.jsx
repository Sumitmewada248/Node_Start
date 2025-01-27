import { useState,useEffect } from "react"
import axios from "axios"




const Display=()=>{

    const [data,setData]=useState([])
    const getdata=async()=>{
        let api="http://localhost:8080/students/getdata"
        axios.get(api).then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getdata()
    },[])


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
        <h1>Display Page</h1>

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
export default Display