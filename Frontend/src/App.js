
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Signup from './Component/Signup'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />


      </Routes>
      </BrowserRouter>
    </>
  )
}


export default App