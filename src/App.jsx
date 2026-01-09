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
// import Dashboard from "./components/Dashboard"
import Addproduct from "./components/admin/Addproduct"
import Allproducts from "./components/Allproducts"
import Products from "./components/admin/Products"

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


          <Route path="/adminlogin" element={<Login />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/addproduct/:id" element={<Addproduct />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
