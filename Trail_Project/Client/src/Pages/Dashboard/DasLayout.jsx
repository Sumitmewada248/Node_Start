import { Link,Outlet } from "react-router-dom";
import Footer from "../../Footer";
import {Nav, Navbar} from 'react-bootstrap';

const DasLayout = () => {
    const name = localStorage.getItem('username');

    return (
        <> 
      
      <Navbar bg="dark" variant="dark" expand="lg" id="dasnav">
            <Navbar.Brand as={Link} to="/dashboard">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text>
                    Welcome, {localStorage.getItem("name")}
                    <Link to="logout">Logout</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

<div id="wrapper">
    
        
        <div id="side">
        <navbar id="sidebar">
           <Link to="dashome">Home</Link>
           <Link to="customer">Customer</Link>
        

           </navbar>
</div>

<div id="outlet"> <Outlet/>

        </div>
  
       </div>
     
        </>
    );
};
export default DasLayout