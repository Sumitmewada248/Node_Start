import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
    userAuthenticate();
  }, []);

  return (
    <>
      <img src="src/css/7953679.jpg" alt="" id="img5" />
    </>
  );
};
export default Home;

