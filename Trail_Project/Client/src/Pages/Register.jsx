import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";

const Registration = () => {
  const [input, setInput] = useState({

  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/bank/register`, input);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <h1 id="head">Customer Registration</h1>
      <div id="regist">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required onChange={handleInput} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" onChange={handleInput} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" required onChange={handleInput} />
          </label>
          <br />
          <label>
            Enter City:
            <input type="text" name="city" onChange={handleInput} />
          </label>
          <br />
          <label>
            Enter Mobile No:
            <input type="text" name="mobile" onChange={handleInput} />
          </label>
          <br />
          <label>
            Enter Pincode:
            <input type="text" name="pincode" onChange={handleInput} />
          </label>
          <br />
          <label>
            Account Type:
            <select
              name="accountType"
              required
              className="form-select"
              onChange={handleInput}
            >
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </label>
          <br />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
