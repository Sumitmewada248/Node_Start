import { Link,Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar} from 'react-bootstrap';

const DasLayout = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    return (
        <> 
      
      <Navbar bg="dark" variant="dark" expand="lg" id="dasnav">
            <Navbar.Brand as={Link} to="/dashboard">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text>
                   <p>Welcome, {localStorage.getItem("name")}  </p> 
                   <p> Email {localStorage.getItem("email")}</p>
                    <button onClick={()=>{localStorage.clear(),navigate("/")}}>Logout</button>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

<div id="wrapper">
    
        
        <div id="side">
        <navbar id="sidebar">
           
         
           <Link to="profile"> <h5>Profile</h5></Link>
        
           <Link to="deposite "><h5>Deposite</h5></Link>
           <Link to="withdraw"><h5>Withdraw</h5></Link>
         
           <Link to="transaction"><h5>Transaction</h5></Link>
           <Link to="balance"> <h5>Balance Inquiry</h5></Link>
           <Link to="statement"><h5>Account Statement</h5></Link>
           <Link to="resetpass"><h5>Reset Password</h5></Link>
        

           </navbar>
</div>

<div id="outlet"> <Outlet/>

        </div>
  
       </div>
     
        </>
    );
};
export default DasLayout