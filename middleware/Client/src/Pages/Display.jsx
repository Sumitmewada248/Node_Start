import { useState,useEffect } from "react";
import axios from "axios";

const Display = () => {
const[diaplay,setDiaplay]=useState([]);

const datasave=async()=>{ 
let api="http://localhost:8080/user/display";
const res=await axios.get(api).then((res)=>{
    setDiaplay(res.data);
    console.log(res.data);
})
}

useEffect(()=>{
    datasave();
},[])

const ans=diaplay.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.userId.username}</td>
            <td>{item.userId.email}</td>
        </tr>
        </>
    )
})

    return (
        <>
            <h1>Display</h1>

            <table border={"2px solid black"} width={"60%"}>

                <tr>
                    <th >FirstName</th> 
                    <th>LastName</th>
                     <th>UserName</th> 
                     <th>Email</th>
                </tr>
                {ans}
            </table>








        </>
    );
};

export default Display