import { useState,useEffect } from "react"
import axios from "axios"


const Insert = () => {

    const [input,setInput]=useState({})
    const [images,setImages]=useState([])
    
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setInput({...input,[name]:value})
        console.log(input)


    }

    const handleSubmit= async()=>{
        let api="http://localhost:4000/products/insert"
      const formData=new FormData
        for(let key in input){
            formData.append(key,input[key])

        }
        for (let i=0;i<images.length;i++){
            formData.append("images",images[i])
        }
        const response=await axios.post(api,formData)
        console.log(response.data)
alert("Product Inserted")
         

    }

    const handleImage=(e)=>{
        setImages(e.target.files)
        console.log(images)
    }


    return (
        <>
        <h1>Insert</h1>

        Enter Product:<input type="text" name="product" onChange={handleInput} /><br />
        Enter Price:<input type="text" name="price" onChange={handleInput} /><br />
        Enter Quantity:<input type="text" name="quantity" onChange={handleInput} /><br />
        Enter Brand: <input type="text" name="brand" onChange={handleInput} /><br />
        Upload Image: <input type="file" multiple name="image" onChange={handleImage} /><br />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Insert