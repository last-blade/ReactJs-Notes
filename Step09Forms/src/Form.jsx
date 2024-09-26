import React from 'react'
import { useState } from 'react';

function Form() {

    let [username, setUsername] = useState("prashant");
    let [password, setPassword] = useState("");

    function handleUsernamePassword(e){
        if(e.target.name == "pswd"){
            password = e.target.value;
            console.log(password);
            setPassword(password);
        }

        else if(e.target.name == "username"){
            username = e.target.value;
            console.log(username);
            setUsername(username);
        }
    }

  return (
    <div>
        <form>
            <label>Username</label>
            <input type="email" name="username"  value={username} onChange={handleUsernamePassword}/> <br />

            <label>Password</label>
            <input type="password" name="pswd" value={password} onChange={handleUsernamePassword}/>
        </form>
    </div>
  )
}

export default Form;