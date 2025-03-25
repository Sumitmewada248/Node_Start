import { Link,Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>  
        <nav>
            <Link to = "home">Home</Link>  |
            <Link to="category">Category</Link>  |
            <Link to="subcategory">Subcategory</Link>   |
            <Link to="product">Product</Link>  |
        
            <Link to="display">Display</Link>  |
        </nav>
        
        <Outlet/>
        </>
    );
};  

export default Layout