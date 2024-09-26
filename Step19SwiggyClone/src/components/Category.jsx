import React, { useEffect, useState } from 'react'
import "../index.css";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

function Category() {
    const [categories, setCategories] = useState([]);

    const [slide, setSlide] = useState(0);

    async function fetchCategory(){
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
    }

    useEffect(()=>{
        fetchCategory();
    }, [])


    function nextSlide(){
        if(slide+3 <=12){
            setSlide(slide + 3);
        }
    }

    function prevSlide(){
        if(slide+3 >=0){
            if(slide == 0){
                console.log("Nothing to do")
            }
            else{
                setSlide(slide - 3);
            }

        }
    }

  return (
    <div className='max-w-[1200px] mx-auto items-center mt-3 px-10'>
        <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>What's on your mind?</p>
            <div className='flex space-x-3'>
                <div className='w-[35px] h-[35px] bg-[#EBEBEC] rounded-full flex items-center justify-center cursor-pointer' onClick={prevSlide}> <MdOutlineArrowBack/> </div>
                {
                    slide<12 ?  
                    <div className='w-[35px] h-[35px] bg-[#D9DADB] rounded-full flex items-center justify-center cursor-pointer'onClick={nextSlide}> <MdOutlineArrowForward/> </div>:
                    <div className='w-[35px] h-[35px] bg-[#EBEBEC] rounded-full flex items-center justify-center cursor-pointer'onClick={nextSlide}> <MdOutlineArrowForward/> </div>
                    }
            </div>
        </div>
        <div className='flex overflow-hidden border-b-2 border-[#F2F2F3] mt-10 pb-8 cursor-pointer'>
            {
                categories.map((item, index)=>{
                    return (
                        <div style={{transform:`translateX(-${slide * 100}%)`}} key={index} className='w-[144px] h-[180px] shrink-0 transition-all duration-500'>
                            <img src={"http://localhost:5000/images/" + item.image} alt="Image" className=''/>
                            {console.log(item.image)}
                        </div >
                    )
                })
            }
        </div>
    </div>
  )
}

export default Category