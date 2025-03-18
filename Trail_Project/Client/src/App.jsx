
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Registration from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import DasLayout from "./Pages/Dashboard/DasLayout"
import Profile from "./Pages/Dashboard/Profile"
import Deposite from "./Pages/Dashboard/Deposite"
import Withdraw from "./Pages/Dashboard/Withdraw"
import Statement from "./Pages/Dashboard/Statement"
import Reset from "./Pages/Dashboard/Reset Password"
import Transaction from "./Pages/Dashboard/Transaction"
import Balance from "./Pages/Dashboard/Balance"



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
      <Route index element={<Profile/>}/>
   
      <Route path="profile" element={<Profile/>}/>
      <Route path="balance" element={<Balance/>}/>

      <Route path="deposite" element={<Deposite/>}/>
      <Route path="withdraw" element={<Withdraw/>}/>
      <Route path="statement" element={<Statement/>}/>
      <Route path="resetpass" element={<Reset/>}/>
      <Route path="transaction" element={<Transaction/>}/>

      


     
       </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
}
export default App