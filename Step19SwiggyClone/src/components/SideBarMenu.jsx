import React from 'react'
import "../index.css"
import Header from './Header'
function SideBarMenu({toggle}) {
  return (
    <>
        <div className='w-[500px] bg-white h-full absolute duration-[400ms]' onClick={(e)=>{e.stopPropagation()}} style={{left: toggle ? '0%' : '-100%'}}>
            <div className='shadow-lg shadow-slate-400 border border-red-500'>Hello</div>
        </div>
        
    </>
    
  )
}

export default SideBarMenu