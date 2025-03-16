import { useNavigate } from "react-router-dom"

const Logout=()=>{
   
    const navigate=useNavigate()

    return(
        <>
        
        <h1 onClick={navigate("/login")}>Logout</h1>



        </>
    )
}

export default Logout