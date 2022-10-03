import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'

const Watched = () => {

  const watchedList = useSelector(state=> state.haveSeen.watchedList)
  return (
    <div>
      <div className='row'>
        {watchedList.map(movie=>{
          return <MovieCard movie={movie} className="col-2"/>
        })}
      </div>
    </div>
  )
}

export default Watched
