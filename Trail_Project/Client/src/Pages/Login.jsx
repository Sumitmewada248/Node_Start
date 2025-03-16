import { useState, useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/Dashboard/profile");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/bank/login`, {
        email,
        password,
      });
      toast.success("Login Successfully");
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      setTimeout(() => {
        navigate("/Dashboard/profile");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <h1 id="head">Customer Login</h1>
      <div id="login">
        Enter Email Id:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Enter Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        If You Don't Have account <Link to="/register">Click Here!</Link>
        <br />
        <p>
          Forgot Password <Link to="/forgot">Click Here!</Link>
        </p>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;

