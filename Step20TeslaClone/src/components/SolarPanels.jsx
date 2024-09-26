import React from 'react'

function SolarPanels() {
  return (
    <div className='flex justify-center h-screen overflow-hidden'>
      <div className='mt-24 absolute'>
        <div className='flex flex-col items-center justify-center text-white'>
          <p className='text-5xl font-bold'>Solar Panels</p>
          <p className='text-3xl font-semibold border-b-[1px] border-white'>Schedule a Virtual Consultation</p>
          <div className='mt-[490px] space-x-3'>
              <button className='bg-[#3E6AE1] w-[264px] h-10 rounded-md font-semibold text-sm'>Order Now</button>
              <button className='bg-[#FFFFFF] w-[264px] h-10 rounded-md text-[#393C41] font-semibold text-sm'>Learn More</button>
          </div>
        </div>
    </div>
      <div>
          <img src="images/Solar Panels.avif" alt="TeslaModel 3" className=''/>
      </div>
    </div>
  )
}

export default SolarPanels;