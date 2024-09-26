import React from 'react'

function TeslaModelX() {
  return (
    <div className='flex justify-center h-screen overflow-hidden'>
      <div className='mt-16 absolute'>
        <div className='flex flex-col items-center justify-center text-white'>
          <p className='text-5xl font-bold'>Model X</p>
          <p className='font-bold text-2xl'>From $65,990<sup>3</sup></p>
          <p className='text-2xl font-semibold border-b-[1px] border-white'>After Federal Tax Credit $7,500</p>
          <p className='text-2xl font-semibold border-b-[1px] border-white'>and Est. Gas Savings $6,500</p>
          
          <div className='mt-[460px] space-x-3'>
              <button className='bg-blue-600 w-[264px] h-10 rounded-md font-semibold text-sm'>Order Now</button>
              <button className='bg-[#FFFFFF] w-[264px] h-10 rounded-md text-[#393C41] font-semibold text-sm'>Demo Drive</button>
          </div>
        </div>
    </div>
      <div>
          <img src="images/Model X.avif" alt="TeslaModel 3" className=''/>
      </div>
    </div>
  )
}

export default TeslaModelX