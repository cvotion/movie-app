import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'


const ComingSoon = () => {

    const moviesComingSoon = useSelector(state=> state.comingSoon.comingSoonList) 
  
  return (
    <>
    <h1>Coming Soon</h1>
    <div className='moviesContainer row'>
      {moviesComingSoon.map(movie=>{
        return <MovieCard movie={movie}/>
      })}
      
    </div>
    </>
  )
}

export default ComingSoon

