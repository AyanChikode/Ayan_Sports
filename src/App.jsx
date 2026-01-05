import Contact from "./components/Contact"
import About from "./components/About"
import Cricket from "./components/Cricket"
import Football from "./components/Football"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Tennis from "./components/Tennis"
import Home from "./components/Home"
import Login from "./components/Login"
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cricket" element={<Cricket/>}/>
    <Route path="/football" element={<Football/>}/>
    <Route path="/tennis" element={<Tennis/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   <Footer />
   </BrowserRouter>
    </>
  )
}

export default App
