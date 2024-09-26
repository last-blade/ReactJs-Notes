import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import "./App.css";
 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path = "/home" element = {<div>Home Page</div>} />
        <Route path = "/about" element = {<div>About Us Page</div>} />
        <Route path = "/contactUs" element = {<div>Contact Us Page</div>} /> */}

        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
