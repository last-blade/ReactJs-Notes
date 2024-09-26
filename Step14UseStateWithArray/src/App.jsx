import { useState } from 'react'
import './index.css'

function App() {
  const [items, setItems] = useState([]);
  
  function addItems(){
    setItems([...items, {id: items.length, value: Math.random()}])
    console.log(items);
  }

  return (
    <>

      <ol>
        {items.map((item) => <li key={item.id}>{item.value}</li>)}
      </ol>
      <button onClick={addItems}>Add items</button>
      
    </>
  )
}

export default App
