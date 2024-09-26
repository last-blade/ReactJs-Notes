import React from 'react'

function TeslaModelY() {
  return (
    <div className='flex justify-center h-screen overflow-hidden'>
      <div className='mt-24 absolute'>
        <div className='flex flex-col items-center justify-center text-white'>
          <p className='text-5xl font-bold'>Model Y</p>
          <p className='text-2xl font-semibold border-b-[1px] border-white'>1.99% APR Financing Ending August 31</p>
          <p className='font-semibold text-xl'>From $31,490<sup>1</sup></p>
          <div className='mt-[460px] space-x-3'>
              <button className='bg-blue-600 w-[264px] h-10 rounded-md font-semibold text-sm'>Order Now</button>
              <button className='bg-[#FFFFFF] w-[264px] h-10 rounded-md text-[#393C41] font-semibold text-sm'>Demo Drive</button>
          </div>
        </div>
    </div>
      <div>
          <img src="images/Model Y.avif" alt="TeslaModel 3" className=''/>
      </div>
    </div>
  )
}

export default TeslaModelY