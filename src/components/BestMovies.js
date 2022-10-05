import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'


const BestMovies = () => {

    const bestMoviesList = useSelector(state=> state.bestMovies.bestMoviesList) 
  
  return (
    <>
    <h1>Coming Soon</h1>
    <div className='mainContainer'>
    <div className='moviesContainer row'>
        {bestMoviesList.map(movie=>{
          return <div className='col-3 d-flex justify-content-center movieCard'>
            <MovieCard movie={movie}/>
          </div>
        })}
      
      </div>
    </div>
    </>
  )
}

export default BestMovies


