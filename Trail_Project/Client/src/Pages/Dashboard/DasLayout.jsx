import { Link,Outlet } from "react-router-dom";
import Footer from "../../Footer";
const DasLayout = () => {
    return (
        <> 
      
<div id="wrapper">
        
        <div id="side">
        <navbar id="sidebar">
           <Link to="dashome">Home</Link>
           <Link to="customer">Customer</Link>
           <Link to="logout">Logout</Link>

           </navbar>
</div>

<div id="outlet"> <Outlet/>

        </div>
  
       </div>
     
        </>
    );
};
export default DasLayout