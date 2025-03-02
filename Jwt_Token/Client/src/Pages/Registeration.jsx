import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/user/registration";
    const response = await axios.post(api, input);
    console.log(response.data);
    navigate("/login");
  };

  return (
    <div className="container" style={{ backgroundColor: "black",color:"white",width:"500px",height:"350px", alignItems:"center", padding:"20px" }}>
      <h1 className="text-center">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter User Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label>Enter Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label>Enter Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registered!
        </button>
      </form>
    </div>
  );
};
export default Registration;

