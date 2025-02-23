import {Outlet,Link} from 'react-router-dom';


const Layout = () => {
    return (
        <>  
        <Link to="home">Home</Link> |
        <Link to="insert">Insert</Link> |
        <Link to="display">Display</Link> |
        <Link to="addbook">Add Book</Link> |
        <Link to="newbook">New Book</Link> |
        <br />


            <Outlet />
        
        
        </>
    );
};  

export default Layout