import React from 'react'
import { data, data2 } from '../App'

/*
data.consumer tag ke andar hamesha function paas karte hain curly braces ke andar like {function(){}}

lekin createContext mein ek problem hai...maine neeche 2 props paas kiye hain name and lastname, agar aise hi 10 huye toh fir
ekdum complex ho jaayega, jaise neeche ho rakha hai ek triagnle type ban raha hai...toh isko overcome karne ke liye hum useContext
hook kaa use karenge Step08 mein
*/

function ChildC() {
  return (
    <>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <data2.Consumer>
                            {
                                (lastName)=>{
                                    return(
                                        <h1>My name is {name} {lastName}</h1>
                                    )
                                }
                            }
                        </data2.Consumer>
                    )
                }
            }
        </data.Consumer>
    </>
  )
}

export default ChildC