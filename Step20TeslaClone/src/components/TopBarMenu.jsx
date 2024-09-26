import React, { useState } from 'react';

function TopBarMenu({toggleValue}) {

    function hide(){
        toggleValue = false;
    }


    const carsList = [
        {ModelS: "images/Model-S.avif"},
        {ModelS: "images/Model-S.avif"},
        {ModelS: "images/Model-S.avif"},
        {ModelS: "images/Model-S.avif"},
        {ModelS: "images/Model-S.avif"}
    ]

  return (
    <div>
        <div className={`${toggleValue ? 'h-[436px]': 'h-0'} bg-white absolute w-full flex justify-center transition-all duration-700`} onMouseLeave={hide}>
            <div className='flex font-semibold text-sm px-10 ml-6 p-5'>
                <p className={`cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md`}>Vehicles</p>
                <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md'>Energy</p>
                <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md'>Charging</p>
                <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md'>Discover</p>
                <p className='cursor-pointer hover:bg-[#F2F2F2] hover:text-black px-4 py-1 rounded-md'>Shop</p>
            </div>
            {/* {
                carsList.map((item, index)=>{
                    return(
                        <div key={index} className={`${toggleValue ? 'visible': 'hidden'}`}>
                            <img src={item.ModelS} alt={item.ModelS} />
                        </div>
                    )
                })
            } */}
        </div>
    </div>
  );
}

export default TopBarMenu;
