import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SearchDoctor from "./Pages/searchDoctor"
import DoctorDashBoard from "./Dashboard"




const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="search" element={<SearchDoctor/>}/>
      

      </Route>
      
      </Routes>


      <Routes>
        <Route path="doctordashboard" element={<DoctorDashBoard/>}>
        </Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}
export default App