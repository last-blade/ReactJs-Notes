import { useState, useCallback, useEffect, useRef} from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numbers, numbersAllowed] = useState(false);
  const [characters, charactersAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(function(){
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbers){
      str = str + "0123456789";
    }

    if(characters){
      str = str + "!@#$%^&*()_-=+~`?><:;',.[]}{"
    }

    for(let i = 1; i<=length; i++){
      var char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }
    
    setPassword(pass);

  }, [length, characters, numbers]);

  useEffect(()=>{
    passwordGenerator()
  },[length, characters, numbers])

  return (
    <>
      <div className='flex justify-center items-center flex-col text-white bg-slate-700 rounded-lg'>
            <h1 className=' text-white text-2xl text-center'>Password Generator</h1>
            <div className='flex justify-center items-center'>
              <textarea value = {password} name="outputField" id="outputField" className='text-black border-none outline-none rounded-md w-60' placeholder='Password' readOnly></textarea>
              {/* <button className=' text-white bg-blue-600 p-3 rounded-md'>Copy</button> */}
            </div>
            <div className='space-x-5 mt-5'>
              <input type="range" min={8} max={50} value={length} className='slider' onChange={(e)=>{setLength(e.target.value)}}/>
              <label htmlFor="">Length:{length}</label>
              <input type="checkbox" defaultChecked={numbersAllowed} onChange={()=>{numbersAllowed((prev)=>!prev)}}/>
              <label htmlFor="">Numbers</label>
              <input type="checkbox" defaultChecked={charactersAllowed} onChange={()=>{charactersAllowed((prev)=>!prev)}}/>
              <label>Characters</label>
            </div>
      </div>
    </>
  )

}
export default App
