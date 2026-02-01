import Contact from "./components/Contact"
import About from "./components/About"
import Bat from "./components/Bat"
import Ball from "./components/Ball"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Glove from "./components/Glove"
import Home from "./components/Home"
import Login from "./components/Login"
import Helmet from "./components/Helmet"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Addproduct from "./components/admin/Addproduct"
import Allproducts from "./components/Allproducts"
import Products from "./components/admin/Products"
import Layout from "./components/admin/Layout"
import Cart from "./components/Cart"
import ProductInfo from "./components/ProductInfo"

function App() {
  return (
    <>
      {/* routing impelements */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />

          <Route path="/cart" element={<Cart />} />


          <Route path="/adminlogin" element={<Login />} />

          <Route path='/admin' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/admin/addproduct' element={<Addproduct />} />
            <Route path='/admin/addproduct/:id' element={<Addproduct />} />
            <Route path='/admin/products' element={<Products />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
