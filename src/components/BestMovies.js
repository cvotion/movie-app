import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'


const BestMovies = () => {

    const bestMoviesList = useSelector(state=> state.bestMovies.bestMoviesList) 
  
  return (
    <>
    <h1>Coming Soon</h1>
    <div className='moviesContainer row'>
      {bestMoviesList.map(movie=>{
        return <MovieCard movie={movie}/>
      })}
      
    </div>
    </>
  )
}

export default BestMovies


