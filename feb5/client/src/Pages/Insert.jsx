import { useState } from "react";
import axios from "axios";
import  { message } from "antd";


const Insert = () => {
    const[data,setData]=useState({})

    const handelSubmit=(e)=>{
       const name=e.target.name
       const value=e.target.value
       setData({...data,[name]:value})
    }

    const handelInput=(e)=>{
        e.preventDefault()
        let api=("http://localhost:3000/students/data")

        axios.post(api,data).then((res)=>{
            message.success("Data Inserted Successfully")
            console.log(res.data)
            setData({
                name:"",
                rollno:"",
                city:"",
                fees:""
            })
        })


    }

    return (
        <>

           


            <div id="" style={{alignItems:"center",border:"2px solid black",padding:"20px",margin:"20px auto",width:"400px",borderRadius:"10px",backgroundColor:"green"}}>
               <center> <h2 style={{color:"blue"}}>Insert Data</h2></center>
                <hr />
                Enter Rollno :<input style={{padding:"10px",margin:"10px",borderRadius:"10px"}} type="text" name="rollno" onChange={handelSubmit} value={data.rollno}/><br />
                Enter Name :<input style={{padding:"10px",margin:"10px",borderRadius:"10px"}} type="text" name="name" onChange={handelSubmit} value={data.name}/><br />
                Enter City : <input style={{padding:"10px",margin:"10px",borderRadius:"10px"}} type="text" name="city" onChange={handelSubmit} value={data.city}/><br />
                Enter fees : <input style={{padding:"10px",margin:"10px",borderRadius:"10px"}} type="text" name="fees" onChange={handelSubmit} value={data.fees}/><br />
           


            <button onClick={handelInput }style={{padding:"10px",margin:"10px",borderRadius:"10px", marginLeft:"130px" ,width:"100px",backgroundColor:"pink",":hover":{backgroundColor:"yellow"}}}>Submit</button>
            </div>
            
        </>
    );
};

export default Insert