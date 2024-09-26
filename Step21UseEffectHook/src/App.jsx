import { useEffect, useState } from "react"


function App() {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }


  // 1. Yeh wala use effect har render par chalega, i.e. jab jab mera page render hoga tab-tab useeffect run hoga. 
  // useEffect(()=>{
  //   console.log("Count increased");
  // });


  // 2. Yeh wala use effect first render par chalega, i.e. jab jab mera page render hoga tab useeffect run hoga kewal 1 baar. 
  // useEffect(()=>{
  //   console.log("Count increased");
  // }, []);


  // 3. Yeh wala use effect count variable ki value update hone par chalega, i.e. jab jab mera count update hoga tab-tab useeffect run hoga. 
  useEffect(()=>{
    console.log("Count increased");
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>Click on me</button>
      <br />
      <p>{count}</p>
    </div>
  )
}

export default App
