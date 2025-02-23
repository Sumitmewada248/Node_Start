import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    const [mydata, setMyData] = useState([])
    const navigate=useNavigate()

const loaddata=async()=>{
    let api="http://localhost:5000/writter/datasave";
    const res=await axios.get(api)
    setMyData(res.data)
    console.log(res.data)
}
useEffect(()=>{
    loaddata()
})

const ans=mydata.map((key)=>{
    return(
        <>
      <tr>
        <td>{key.author}</td>
        <td>{key.book}</td>
        <td>
            <button onClick={()=>{ navigate(`/newbook/${key._id}`) }}>Add Book</button>
        </td>
      </tr>
        </>
    )
}
)

    return(
        <>
        <h1>Book List</h1>

        <table border={2}>
            <tr>
                <th>Author name</th>
                <th>Address</th>
                <th>AddBook</th>
            </tr>
            {ans}
        </table>

        </>
    )
}
export default AddBook;