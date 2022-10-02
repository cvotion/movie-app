import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'


const InTheaters = () => {

    const moviesInTheaters = useSelector(state=> state.inTheaters.InTheatersList) 
    console.log('in component', moviesInTheaters)
  return (
    <>
    <h1>In Theaters</h1>
    <div className='moviesContainer row'>
      {moviesInTheaters.map(movie=>{
        return <MovieCard movie={movie}/>
      })}
      
    </div>
    </>
  )
}

export default InTheaters
