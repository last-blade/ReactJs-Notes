import { useRef, useState } from "react"



function App() {

  const refElement = useRef('Prashant');
  console.log(refElement); /* OUTPUT:- {current: ""}  useRef ek oobject return karta hai jismein key ka naam 'current' hota
  hai and value kaa naam maine already diya hua hai 'Prashant' (i.e. useRef returns an object with a single
  property named as 'curent')
   */
  // refElement.current = "Karan";

  const [name, setName] = useState("Prashant");
  function Reset(){
    setName("");
    refElement.current.focus();
  }
  return (
    <>
      <h3>1st Case:- Jab main input field mein kuch enter karta hoon toh fir input filed ke chaaron taraf ek black border ban jaata hai....jisse
        pata chalta hai ki input filed par click kiya hua hai....but jaise hi main reset button par click karta hoon toh fir woh
        black border jo hai input filed se hatt jaata hai...jo batata hai ki ab main enter nahin kar sakta input filed mein 
        , agar karna hai toh firse input field par click karke enter kar sakte hain....

      2nd Case:- main chahta hoon ki jab main reset button par click karun toh fir woh input filed par border bana rahe i.e. focus
      bana rahe wahin par or mujhe dobara se input field par click karne ki need naa papde automatically wahan clicked rahe.
      toh aise karne ke liye hi hum useRef hook kaa use karenge i.e. hum direct DOM mein manipulation kar rahe hain....see line 17 above
      </h3>

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ref={refElement}/>
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
