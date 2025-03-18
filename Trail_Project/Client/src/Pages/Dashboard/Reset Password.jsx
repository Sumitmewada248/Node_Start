import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const Reset = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const api = `${BASE_URL}/bank/resetpassword`;
        try {
            const response = await axios.post(api, { oldPassword, newPassword, id: localStorage.getItem("id") });
            toast.success(response.data);
        } catch (error) {
            toast.error(error.response.data);
        }
    };

    return (
        <>
            <div id="reset">
                <h1>Change Password</h1>
                <form onSubmit={handleSubmit}>
                    <label>Old Password:</label><br />
                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} /><br />
                    <label>New Password:</label><br />
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /><br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default Reset;

