import React, { useContext } from 'react'
import { myContext } from '../src/App'

function ChildC() {
    const user = useContext(myContext);
    console.log(user);
  return (
    <div>
        {user.fullname} {user.lastname}
    </div>
  )
}

export default ChildC;