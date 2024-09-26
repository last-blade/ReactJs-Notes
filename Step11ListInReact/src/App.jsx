
//Map function example below:-
/*
const arr = [1,2,3,4,5];
const ans = arr.map( (x) => x*2 );
console.log(ans);


The map() method of Array instances creates a new array with the results of calling a provided
function on every element in the calling array.
*/




// function App() {
//   const IPLteams = ["KKR", "CSK", "Delhi Capitals"]
//   return (
//     <>
//       {IPLteams.map((i)=><h1>{i}</h1>)} 
      
//       {/* //it is a map function jisse humne list ko implement kiya hai react mein...but isse error aa rahi hai... inspect karke 
//       console mein jaake dekho...or issi error ko hum Step-12 mein solve karenge*/}
//     </>
//   )
// }

                                                    //OR

/*oopar wala or neeche wala same hai....bas maine oopar wale code mein 'map' function jo hai andar likha hai and neeche wale 
code mein 'map' function bahar likha hai or 'ans' naam ke variable mein store kiya hai or fir uss 'ans' variable ko
'h1' tag mein daal diya. */ 

function App() {
  const IPLteams = ["KKR", "CSK", "Delhi Capitals"]
  const ans = IPLteams.map( (i) => <h1>{i}</h1> );
  return (
    <>
      <h1>{ans}</h1>

      {/* //it is a map function jisse humne list ko implement kiya hai react mein...but isse error aa rahi hai... inspect karke 
      console mein jaake dekho...or issi error ko hum Step-12 mein solve karenge
      
      Error below in this map:- 

      Warning: Each child in a list should have a unique "key" prop.
      
      */}
    </>
  )
}

export default App
