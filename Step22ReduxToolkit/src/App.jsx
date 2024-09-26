import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, resetValue } from "./features/counterSlice";
import { useState } from "react";


function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment());
  }

  function handleDecrement(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(resetValue());
  }

  function handleIncrementBy(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrementBy}>Incrementby</button>
      <input type="Number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
    </div>
  )
}

export default App
