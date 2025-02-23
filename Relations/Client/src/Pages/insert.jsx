

import axios from 'axios';
import React, { useState } from 'react';

const Insert = () => {
const [mydata, setMyData] = useState({})

const handelInput = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setMyData(values=>({...values,[name]:value}))
    console.log(mydata)
}

const handelSubmit =async () => {
    
    
    let api="http://localhost:5000/writter/insert";
   const res=await axios.post(api,mydata).then((res)=>{
        console.log(res.data)
        alert ("data inserted")
    })
}


    return (
        <>
        Author Name: <input type="text" name="author" onChange={handelInput} /><br />
        Address : <input type="text" name="book" onChange={handelInput} /><br />

        <button onClick={handelSubmit}>Submit</button>
        
        </>


    );
}

export default Insert