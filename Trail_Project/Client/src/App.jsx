
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Registration from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import DasLayout from "./Pages/Dashboard/DasLayout"
import DasHome from "./Pages/Dashboard/DasHome"
import Customer from "./Pages/Dashboard/Costumer"
import Logout from "./Pages/Dashboard/Logout"


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/>
       <Route path="login" element={<Login/>}/>  
       <Route path="register" element={<Registration/>}/>
       </Route>

       
     

    </Routes>

    <Routes>
      <Route path="/Dashboard" element={<DasLayout/>}>
      <Route index element={<DasHome/>}/>
       <Route path="dashome" element={<DasHome/>}/>
       <Route path="customer" element={<Customer/>}/>
       <Route path="logout" element={<Logout/>}/>
       </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
}
export default App