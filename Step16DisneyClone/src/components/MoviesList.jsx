import React, { useEffect, useRef, useState } from 'react'
import "../Services/GlobalAPI"
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HorizontalMovieCard from './HorizontalMovieCard';
function MoviesList({genreId, indexValue}) {

    const refElement = useRef(null);
    
    const [moviesList, setMoviesList] = useState([]);

    useEffect(()=>{
        getMovies();
    }, [])

    const getMovies = () =>{
        GlobalAPI.getMovieByGenreId(genreId).then(response =>{
            console.log(response.data.results);
            setMoviesList(response.data.results);
        });
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={()=>slideLeft(refElement.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[150px] ${indexValue%3==0 ? 'mt-[70px]': 'md:mt-[150px]'}`}/>

      <div className='flex overflow-x-auto gap-8 pt-5 px-3 pb-10 scrollbar-none scroll-smooth' ref={refElement}>
          {moviesList.map((item, index)=>(
            <>
              {indexValue%3==0?<HorizontalMovieCard movie={item}/> : <MovieCard movie={item}/>}
            </>
          ))}
      </div>
      <IoChevronForwardOutline onClick={()=>slideRight(refElement.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 mt-[150px] ${indexValue%3==0 ? 'mt-[70px]': 'mt-[150px]'}`}/>
    </div>
  )
}

export default MoviesList