import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../config";

const Balance = () => {
  const [bal, setBal] = useState(0);

  useEffect(() => {
    const loadBal = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/bank/balance`, {
          id: localStorage.getItem("id"),
        });
        setBal(response.data.accountID.balance);
      } catch (error) {
        console.log(error);
      }
    };
    loadBal();
  }, []);

  return (
    <div className="balance-display">
      <h1>Balance Inquiry</h1>
      <h2>Account Balance: {bal}</h2>
    </div>
  );
};

export default Balance;
