import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Register from "./Pages/Registeration"
import Login from "./Pages/Login"
import DashBoard from "./Pages/Dashboard"


const App=()=>{
  return(
    <>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      
      
      
      
      
      </Route>
    </Routes>
  <Routes>
    <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App