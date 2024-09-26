import { createContext } from "react"
import ChildC from "./components/ChildC";



/*
Prop drilling se bachne ke liye hum useContext hook kaa use karte hain.
-> How to use useContext hook.

Step:1 sabse pehle context create karo using 'createContext'
Step:2 provide context
Step:3 consume context
*/
const myContext = createContext(); //Step:1 sabse pehle context create karo using 'createContext'

function App() {
  const fullname = "Prashant";
  const lastname = "Tyagi";
  return (
    <>
    {/*Step:2  jiss naam se context create kiya hai i.e. maine 'myContext' naam se context create kiya hai, 
      toh ab 'myContext.Provider' ke tag mein wrap karna hai uss component ko jismein humein props paas karne 
      hain, toh mujhe "ChilC" naam ke component mein props paas karne hain toh fir maine 'myContext.Provider' 
      tag mein apna woh wala component provide kiya hai jismein mujhe props ko pass karna ha i.e., ChildC

      NOTE: jiss naam se context create kiya hai usko export bhi karna hai i.e. myContext ko export bhi karna hai, or jiss component mein use karna hai usmein import karna zaroori hai
    */}
      <myContext.Provider value={{fullname, lastname}}>
        <ChildC/>
      </myContext.Provider>
    </>
  )
}

export default App
export {myContext}
