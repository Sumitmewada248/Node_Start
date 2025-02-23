import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/home"
import Insert from "./Pages/insert"
import Display from "./Pages/display"
import AddBook from "./Pages/AddBook"
import NewBook from "./Pages/NewBook"


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout />}>
<Route path="home" element={<Home/>} />
<Route path="insert" element={<Insert/>} />
<Route path="display" element={<Display/>} />
<Route path="addbook" element={<AddBook/>} />
<Route path="newbook/:id" element={<NewBook/>} />


</Route>

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}
export default App