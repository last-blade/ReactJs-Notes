import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username = "Prashant" btnText = "Visit us"></Card>
      <Card username = "Shah Rukh Khan" btnText = "Click here"></Card>
    </>
  )
}

export default App
