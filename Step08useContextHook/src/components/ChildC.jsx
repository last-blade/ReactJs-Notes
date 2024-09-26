import React, { useContext } from 'react'
import { myContext } from '../App';

function ChildC() {
  //Step:3 import karlo jiss naam se context create kiya hai
  //Step:4 or iss tareeke se initialize kardo "const user = useContext(myContext);" 
    const user = useContext(myContext);
    console.log(user);
  return (
    <div>
      {user.fullname} {user.lastname} {/* dot(.) lagake isliye access kiya hai kyoki humne 2 props paas kiye hain(i.e. fullname and lastname) toh fir object banke aaya hai, agar single prop hota toh main kewal 'user' likh deta or access hoo jaata*/}
    </div>
  )
}

export default ChildC;