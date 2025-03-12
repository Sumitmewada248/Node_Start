


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";
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
    let api = `${BASE_URL}/bank/register`;
     const response = await axios.post(api, input);
    console.log(response.data);
    navigate("/login");
  };

    return(
 <>

 <h1 id="head">Customer Registration</h1>

 <div id ="login">
<form action="">

        Name:
        <input type="text" name="name" required onChange={handleInput} />

    <br />

    Address:<input type="text" name="address" onChange={handleInput} />

<br />


    
        Email:
        <input type="email" name="email" required  onChange={handleInput}/>
    
   
    <br />
Enter City :<input type="text" name="city" onChange={handleInput}/><br/>
Enter Mobile No :<input type="text" name="mobile" onChange={handleInput} /><br/>
Enter Pincode :<input type="text" name="pincode" onChange={handleInput} /><br/>

    
        Account Type:
        <select name="account" required className="form-select " onChange={handleInput} >
            <option value="" disabled>Select Account Type</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
        </select>
    
    <br />
    <button type="submit" name="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
</form>
    </div>
    </>

    )
}

export default Registration