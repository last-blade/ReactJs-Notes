import React, { useState } from 'react';
import '../index.css';
import { CiCircleQuestion } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import TopBarMenu from './TopBarMenu';

function Header() {

  const [toggle, setToggle] = useState(false);

  const [hover, setHover] = useState(false);

  function showTopBarMenuOrNot(){
    if(toggle == false){
      setToggle(true);
    }
    else{
      setToggle(false)
    }
  }

  return (
    <div>
      <TopBarMenu toggleValue={toggle}/>
      <div className='container absolute text-white'>
        <div className='header flex  justify-center p-5 px-10 space-x-[400px]'>
          <div className='w-[120px] h-6'>
            <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path></svg>
          </div>
          <div className='flex font-semibold text-sm text-white hover:text-black' onMouseEnter={showTopBarMenuOrNot} onMouseLeave={showTopBarMenuOrNot}>
            <p className={`cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md`} >Vehicles</p>
            <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md' >Energy</p>
            <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md' >Charging</p>
            <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md' >Discover</p>
            <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md' >Shop</p>
          </div>
          <div className='flex space-x-3'>
            <CiCircleQuestion className='w-6 h-6'/>
            <TbWorld className='w-6 h-6'/>
            <FaRegCircleUser className='w-6 h-6'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
