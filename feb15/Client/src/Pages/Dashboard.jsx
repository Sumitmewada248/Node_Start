import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard=()=>{
    const Navigate = useNavigate()

useEffect(() => {
    if(!localStorage.getItem('username')&& !localStorage.getItem('useremail')){
        Navigate('/login')
    }
}, [])


const logout=()=>{
    localStorage.clear()
    Navigate('/login')
}




    return(
        <>
        <h1>Welocome to my Dashboard</h1>
        Welcome :{localStorage.getItem('username')}
        Email:{localStorage.getItem('useremail')} |
        <button onClick={logout}>Logout</button>
        </>
    )
}

export default Dashboard