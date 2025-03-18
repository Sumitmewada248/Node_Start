import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import { Table } from "react-bootstrap";

const Statement = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (startDate && endDate) {
          const response = await axios.post(`${BASE_URL}/bank/Statement`, {
            id: localStorage.getItem("id"),
            start: startDate,
            end: endDate,
          });
          setBalance(response.data.balance);
          setTransactions(response.data.transactionID);
          console.log(response.data.transactionID);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactions();
  }, [startDate, endDate]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <>
      <div id="transcation">
        <h1>Transaction History</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            style={{ width: "150px" }}
          />
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            style={{ width: "150px" }}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction._id}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.amount}</td>
                <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2"></td>
              <td>Available Balance:</td>
              <td colSpan="2">{balance}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Statement;

