import { useState } from 'react'
import './index.css';

/*
Suppose main koi registration form create and usmein multiple variables hain and unn variable ko render karne ke liye main
useState hook kaa use kar raha hoon toh iske liye har ek variable ke liye 'useState' banana padega like below:-
 'const[firstName, setFirstName] = useState("");' toh jaise maine firstname ke liye useState hook banaya hai, aise hi or bhi
 variable ke liye baar baar multiple useState hook banane padenge.....toh isse bachne ke liye hi ek concept aaya tha ki hum
 useState hook mein objects likh sakte hain or uss object mein hum kaafi saari values store kar sakte hain or jis value ko humein
 update karna hai toh fir hum uss value ko direct update bhi kar sakte hain.
*/

function App() {

  const [allValues, setAllValues] = useState({Name: "Prashant", age: "22"});
  function update(){
    setAllValues({...allValues, Name: "SRK"});
  }
  return (
    <>
     <h3>My name is {allValues.Name} and my age is {allValues.age}</h3>
     <button onClick={update}>Update</button>
    </>
  )
}

export default App
