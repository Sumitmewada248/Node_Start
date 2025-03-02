import{Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            
            
            <Link to="/">Home</Link> 
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

            <Outlet />

        </>
    )
}
export default Layout