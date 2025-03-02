import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>


      <Routes>
        <Route path ="dashboard" element={< Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App