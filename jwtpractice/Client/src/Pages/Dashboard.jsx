import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Dashboard=()=>{
    const navigate=useNavigate()
     

    const Logout=()=>{
        localStorage.clear()
        navigate("/home")
    } 

useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!token){
        navigate("/home")
    }

},[])



    return(
        <>
        
        <h1>Dashboard</h1>
        WelCome: {localStorage.getItem("usename")}

        Email:{localStorage.getItem("useremail")}

        
        </>
    )
}

export default Dashboard