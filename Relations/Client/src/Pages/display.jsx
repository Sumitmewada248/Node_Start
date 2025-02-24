import { useState,useEffect } from "react";
import axios from "axios";



const Display = () => {
    const [mydata, setMyData] = useState([])
    

const loaddata=async()=>{
    let api="http://localhost:5000/writter/display";
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
            
            {key.bookid.map((key1)=>{
                return(
                    <> 
                    <tr>
                       <p>{key1.bookname}
                     {key1.price}</p>
                    </tr> 
                    </>
                )
            })}

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
            <th>Book  Price</th>
       
            </tr>
            {ans}
        </table>

        </>
    )
}
export default Display;