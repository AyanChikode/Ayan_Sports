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
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <>
    {/* routing impelements */}
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/bat" element={<Bat/>}/>
    <Route path="/ball" element={<Ball/>}/>
    <Route path="/glove" element={<Glove/>}/>
    <Route path="/helmet" element={<Helmet/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>


    <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/admin/addproduct" element={<Addproduct />} />
    <Route path="/admin/products" element={<Products />} /> */}


   </Routes>
   <Footer />
   </BrowserRouter>
   
    </>
  )
}

export default App
