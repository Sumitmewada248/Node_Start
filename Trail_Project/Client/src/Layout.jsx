import {Link,Outlet} from "react-router-dom"
import Footer from "./Footer";



const Layout = () => {
    return (
        <> 
<nav>
    <img src="src/css/download2.png" alt="image"  id="myimg"/>
        <Link to="home">Home</Link> 
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
        

</nav>

        <Outlet id="outlet"/>

        
<Footer/>
        
        </>
    );
};  

export default Layout