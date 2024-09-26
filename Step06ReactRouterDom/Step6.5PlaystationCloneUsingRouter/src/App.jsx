import { useState } from 'react'
import Homepage from './components/homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Collections from './components/collections';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path='/collections' element = {<Collections/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
