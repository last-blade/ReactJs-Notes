import { useState } from 'react'
import './App.css'

function App() {
  let [counter, updateCounter] = useState(0); /*'useState' hamesha 2 cheez deta hai array ki form mein 0 index par ek 
                                              variable(variable kaa naam kuch bhi ho sakta hai..maine counter naam rakha hai) 
                                              hota hai and 1 index par ek function(function kaa naam kuch bhi ho sakta hai..maine 
                                              updateCounter naam rakha hai) hota hai.....updateCounter wala function jo hai 'counter' 
                                              variable(jo maine khudse naam diya hai 0 index par hai) ko manipulate karega i.e. 
                                              control karega...and counter variable mein maine dafualt value '0' di huyi hai 
                                              see line no. 10 (useState(0))
                                            */
  function incValue(){
    counter++;
    updateCounter(counter);
    console.log(counter);
  }

  function decValue(){
    if(counter>=1){
      counter--;
      updateCounter(counter);
    }
    console.log(counter);
  }

  return (
    <>
      <h1>Hello Vite + react</h1>
      <h2>Counter Value: {counter}</h2>
      <br/>
      <button onClick={decValue}>Decrement Value</button>
      <button onClick={incValue}>Increment Value</button>
    </>
  )
}

export default App
