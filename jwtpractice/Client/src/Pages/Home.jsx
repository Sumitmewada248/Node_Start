import { useState,useEffect, use } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate=useNavigate()
    const userAuth=async()=>{
        const token=localStorage.getItem("token")

        if(token){
            let api="http://localhost:8000/user/authentic"
            const response=await axios.post (api,null,{header :{"x-auth-token":token}})
            console.log(response.data)
            localStorage.setItem("username",response.data.name)
            localStorage.setItem("useremail",response.data.email)

            navigate("/dashboard")
        }
    }

    useEffect(()=>{
        userAuth()
    },[])
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home