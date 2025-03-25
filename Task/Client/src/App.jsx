import Layout from "./Layout"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Category from "./Pages/Category"
import Product from "./Pages/Product"
import Subcategory from "./Pages/SubCategory"
import Display from "./Pages/Display"

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="subcategory" element={<Subcategory/>}/>
      <Route path="display" element={<Display/>}/>

      
      </Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App