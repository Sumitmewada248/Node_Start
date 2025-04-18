import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display" 


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route path="home" element={<Home />} />
        <Route path="insert" element={<Insert />} />
        <Route path="display" element={<Display />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App