import { Outlet } from "react-router-dom"; 
import Header from "./Compnent/Header";
import Footer from "./Compnent/Footer";



const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout