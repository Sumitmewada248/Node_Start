import Layout from "./Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Dashboard from "./Pages/Dashboard"



const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="registration" element={<Registration/>}/>  
      <Route path="dashboard" element={<Dashboard/>}/>
      
      
      
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App