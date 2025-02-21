import { useState, useEffect } from "react"
import axios from "axios"

const Display = () => {
    const [mydata, setMydata] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/worker/display")
            setMydata(response.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>Display</h1>
            <table>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}   
export default Display
