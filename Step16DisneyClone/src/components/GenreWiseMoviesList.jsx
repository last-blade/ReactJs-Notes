import React from 'react'
import GenreList from './GenreList'
import MoviesList from './MoviesList'

function GenreWiseMoviesList() {
  return (
    <div>
        {
            GenreList.genre.map((item, index)=> index <=9 &&(
                <div className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MoviesList genreId={item.id} indexValue={index}/>
                </div>
            ))
        }
    </div>
  )
}

export default GenreWiseMoviesList;