import Hello from "./new"
import Nothing from "./nothing"
function App() {
  let a = "Chai or react";
  return (
    <>
    <Hello></Hello>
    <Nothing></Nothing>
    {a} 
    /* hamesha yahan par "evaluated expression" likhi jaati hai i.e. hum direct koi javascript nahin likh sakte...pehle oopar
    humne javascript mein 'a' naam kaa variable liya hai or fir humne iss variable ko inject kar diya hai....direct hum nahin
    likh sakte aise return ke andar*/
    </>
  )
}

export default App
