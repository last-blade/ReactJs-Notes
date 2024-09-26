import { createContext } from "react"
import ChildC from "../components/ChildC";


const myContext = createContext();

function App() {
  const fullname = "Prashant";
  const lastname = "Tyagi";
  return (
    <>
      <myContext.Provider value={{fullname, lastname}}>
        <ChildC/>
      </myContext.Provider>
    </>
  )
}

export default App
export {myContext}
