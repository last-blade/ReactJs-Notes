import React, { useEffect, useState } from 'react'
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

function TopRestaurants() {

    const [restaurants, setRestaurants] = useState([]);
    const [slide, setSlide] = useState(0);

    async function fetchRestaurants(){
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const apiData = await response.json();
        setRestaurants(apiData);
        console.log(restaurants);
    }

    useEffect(()=>{
        fetchRestaurants();
    }, [])


    function slidePrev(){
        if(slide >= 1){
            setSlide(slide - 1);
        }
    }

    function slideNext(){
        if(slide < 7){
            setSlide(slide + 1);
        }
        console.log(slide);
    }

  return (
    <div className='max-w-[1200px] mx-auto mt-3 px-10 overflow-hidden'>
        <div className='flex justify-between'>
            <p className='mt-12 text-2xl font-bold'>Top restaurant chains in Delhi</p>
            <div className='flex space-x-3 mt-12'>
                    <div className='w-[35px] h-[35px] bg-[#EBEBEC] rounded-full flex items-center justify-center cursor-pointer'  onClick={slidePrev}> <MdOutlineArrowBack/> </div>
                    <div className='w-[35px] h-[35px] bg-[#D9DADB] rounded-full flex items-center justify-center cursor-pointer'onClick={slideNext}> <MdOutlineArrowForward/> </div>
            </div>
        </div>
        <div className='flex space-x-10 pt-5 border-b-2 border-[#F2F2F3]'>
            {restaurants.map((item, index)=>{
                return (
                    <div>
                        <div  style={{transform:`translateX(-${slide * 100}%)`}} key={index} className='h-[182px] w-[260px] shrink-0 flex object-cover cursor-pointer hover:scale-110 transition-all duration-300 relative items-end'>
                            <img src={"http://localhost:5000/images/" + item.image} alt="image" className='w-full h-full rounded-lg'/>
                            {console.log(item.image)}
                            <div className='image-overlay absolute w-full h-full top-0'></div>
                            <p className='absolute text-white text-xl font-extrabold tracking-tighter p-2'>{item.offer}</p>
                        </div>
                        <div className='p-2 leading-tight'>
                            <p className='font-bold text-lg'>{item.title}</p>
                            <div className='flex space-x-1'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>    
                            <p className='font-semibold'>{item.rating}</p>
                            <p className='font-bold'>•</p>
                                <div className='flex font-semibold'>
                                    <p>{item.minTime}</p>
                                    <p>-</p>
                                    <p>{item.maxTime}</p>
                                    <p className='ml-1'>mins</p>
                                </div>
                            </div>
                            <p className='text-[#676A6D]'>{item.name}</p>
                            <p className='text-[#676A6D]'>{item.place}</p>
                        </div>
                    </div>
                )
            })}
            {/* <div className='flex overflow-hidden border-b-2 border-[#F2F2F3] mt-10 pb-8 cursor-pointer'></div> */}
        </div>
        
    </div>
  )
}

export default TopRestaurants