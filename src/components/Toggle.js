import React, { useState } from 'react'

function Toggle() {
    //Creating a state value
    const[show,setShow]=useState(false);

  return (
    <div>
        <button onClick={()=>setShow(!show)}>{show ?"Hide":"Show"}</button>
        {show&&<p>hello mean stack students</p>}
        
    </div>
  )
}

export default Toggle