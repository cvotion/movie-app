import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'


const ComingSoon = () => {

    const moviesComingSoon = useSelector(state=> state.comingSoon.comingSoonList) 
  
  return (
    <>
    <h1>Coming Soon</h1>
    <div className='mainContainer'>
      <div className='moviesContainer row'>
          {moviesComingSoon.map(movie=>{
            return <div className='col-3 d-flex justify-content-center flex-column align-items-center mb-3 movieCard'>
              <MovieCard movie={movie}/>
              <h3>{movie.title}</h3>
            </div>
          })}
      
      </div>
    </div>
    </>
  )
}

export default ComingSoon

