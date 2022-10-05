import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'

const Watched = () => {

  const watchedList = useSelector(state=> state.haveSeen.watchedList)
  return (
    <>
      <h1>Movies You've Watched</h1>
    <div className='mainContainer'>
    <div className='moviesContainer row'>
        {watchedList.map(movie=>{
          return <div className='col-3 d-flex justify-content-center movieCard'>
            <MovieCard movie={movie}/>
          </div>
        })}
      
      </div>
    </div>
    </>
  )
}

export default Watched
