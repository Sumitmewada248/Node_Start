
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>  
        
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Outlet/>

        </>
    );
};  

export default Layout