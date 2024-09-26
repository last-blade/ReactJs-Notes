import { useState } from 'react'

function App() {
  const [color, setColor] = useState("skyblue");


  function changeColor(color){
    setColor(color); 
  }

  return (
    <>
      <div style={{backgroundColor: color}} className="container flex justify-center items-center space-x-10 bg-slate-900">
        <button className=' bg-white text-black font-bold p-4 rounded-2xl border border-gray-500' onClick={() => changeColor("white")}>White</button>
        <button className=' bg-black text-white font-bold p-4 rounded-2xl border border-white'onClick={() => changeColor("black")}>Black</button>
        <button className=' bg-orange-500 text-white font-bold p-4 rounded-2xl 'onClick={() => changeColor("orange")}>Orange</button>
        <button className=' bg-green-800 text-white font-bold p-4 rounded-2xl'onClick={() => changeColor("green")}>Green</button>
        <button className=' bg-red-700 text-white font-bold p-4 rounded-2xl'onClick={() => changeColor("red")}>Red</button>
      </div>
    </>
  )
}

export default App