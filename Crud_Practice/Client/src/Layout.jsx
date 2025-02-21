import Topbar from "./Component/Navbar";
import Nav from "./Component/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>  
        <Topbar/>
        <Outlet/>
        
        </>
    );
};  

export default Layout