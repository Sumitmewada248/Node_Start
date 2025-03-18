import axios from "axios";
import BASE_URL from "../../config";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const userAuthenticate = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.post(`${BASE_URL}/bank/authenticate`, null, {
          headers: { "x-auth-token": token },
        });
       
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("id", response.data._id);
        navigate("/Dashboard/profile");
      }
    };
  
  
  
    useEffect(() => {
      userAuthenticate();
    }, []);
  

    const [profile, setProfile] = useState({});
    const [accNum, setaccNum] = useState("");
    const loadProfile = async () => {
        let api = `${BASE_URL}/bank/profile`;
        try {
            const response = await axios.post(api, { id: localStorage.getItem("id") });
            console.log(response.data);
            setProfile(response.data);
            setaccNum(response.data.accountID.accountNumber);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadProfile();
    }, [])
    return (
        <>
            <div id="profile">
                <h1>Profile Detail</h1>
                <h4>Name : {profile.name}</h4>
                <h6>Account Number : {accNum} </h6>
                <h6>Address : {profile.address} </h6>
                <h6>Phone : {profile.mobile} </h6>
                <h6>Email : {profile.email} </h6>
                <h6>City : {profile.city} </h6>
                <h6>Pincode :{profile.pincode} </h6>
                <h6>Account Type : {profile.accountType} </h6>

            </div>
            <ToastContainer />
        </>
    )
}
export default Profile
