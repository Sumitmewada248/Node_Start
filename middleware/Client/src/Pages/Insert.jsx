import { useState,useEffect } from "react";
import axios from "axios";


const Insert = () => {
    const [input, setInput] = useState({});

     const handelInput=(e)=>{
       const name=e.target.name;
      const  val=e.target.value;
        setInput(values=>({...values,[name]:val}))
         
     }
     const handelSubmit=(e)=>{
         e.preventDefault();
         
         let api="http://localhost:8080/user/insert";
         axios.post(api,input)
         .then((res)=>{
            console.log(res.data);
            alert ("Data Inserted");
         })
        
     }

    return (
        <>
            UserName:<input type="text" name="username" value={input.username} onChange={handelInput}/> <br />
            Enter Email <input type="email" name="email" value={input.email} onChange={handelInput}/> <br />    
            Enter Firstname <input type="text" name="firstname" value={input.firstname} onChange={handelInput}/> <br />
            Enter Lastname <input type="text" name="lastname" value={input.lastname} onChange={handelInput}/> <br />

            <button onClick={handelSubmit}>Submit</button>

            
              </>
    );
};

export default Insert