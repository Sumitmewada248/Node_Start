import { Link ,Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <>  
        <nav style={{display:"flex",gap:"1rem",alignItems:"center",padding:"1rem",backgroundColor:"#333",color:"white"}}>
        
        <Link style={{color:"white",textDecoration:"none"}} to ="/">Home</Link>
        <Link style={{color:"white",textDecoration:"none"}} to ="/insert">Insert</Link>
        <Link style={{color:"white",textDecoration:"none"}} to ="/display">Display</Link>


        </nav>
        
        <Outlet/>
        
        </>
    );
};  

export default Layout