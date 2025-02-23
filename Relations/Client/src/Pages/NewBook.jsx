import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const NewBook = () => {
    const [bookname, setBookName] = useState("")
    const [price, setPrice] = useState("")
    const { id } = useParams()
    const handelSubmit = async () => {
        let api = "http://localhost:5000/writter/addnewbook";
        const res = await axios.post(api, { bookname: bookname, price: price, id: id })
        console.log(res.data)
        alert("Book Added")

    }
    return (
        <>
        <h1>Book List</h1>
        Enter Book Name: <input type="text" value={bookname} onChange={(e) => { setBookName(e.target.value) }} /><br />
        Enter Price: <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} /><br />
        <button onClick={handelSubmit}>Submit</button>
        </>
    )
}

export default NewBook