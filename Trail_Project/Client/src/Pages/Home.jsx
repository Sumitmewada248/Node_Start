
import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";
import {useNavigate} from "react-router-dom";
const Home=()=>{
  const navigate = useNavigate();

  const userAuthenticate=async()=>{
    const token = localStorage.getItem("token");
    if (token)
    {
      let api=`${BASE_URL}/bank/authenticate`;
      const response = await axios.post(api, null, { headers: { "x-auth-token": token } });
      console.log(response.data);
      localStorage.setItem("username", response.data.name);
      localStorage.setItem("useremail", response.data.email);
       navigate("/dashboard");       
    }
  }

useEffect(()=>{
  userAuthenticate();
}, [])


  return(
    <>

  
      <img src="src/css/7953679.jpg" alt="" id="img5" />
    </>
  )
}
export default Home;
