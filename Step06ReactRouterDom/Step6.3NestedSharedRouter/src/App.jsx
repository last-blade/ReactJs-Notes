import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import "./App.css";
 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}> // Route tag ke andar 3 or route tag hain...issi ko nested route kehte hain....step-6.2 mein dekhenege toh alag hai bilkul
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='*' element = {<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

