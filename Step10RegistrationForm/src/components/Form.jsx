import React, { useEffect, useState } from 'react'

function Form() {
    const data = {
                    name: "",
                    email: "",
                    password: ""
                }
    
    const [inputData, setInputdata] = useState(data);   
    function handleData(e){
        setInputdata({...inputData, [e.target.name]:e.target.value});
        console.log(inputData);
    }


    const [flag, setFlag] = useState(false);
    useEffect(()=>{
        console.log("Registered");
    }, [flag]);



    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are mandatory");
        }
        else{
            setFlag(true)
        }
    }

  return (
    <>
        <div className='message'>
            {(flag)? <h1>Hello {inputData.name}, You've registered Successfully</h1>: ""}
        </div>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration Form</h1>
            </div>
            <div className='inputs'>
                <div className='details'>
                    <input type="text" name='name' placeholder='Enter your name' value={inputData.name} onChange={handleData}/>
                </div>
                <div className='details'>
                    <input type="email" name='email' placeholder='Enter your email' value={inputData.email} onChange={handleData}/>
                </div>
                <div className='details'>
                    <input type="password" name='password' placeholder='Enter your password' value={inputData.password} onChange={handleData}/>
                </div>
                <div className='details'>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Form