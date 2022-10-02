import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MovieCard from './MovieCard'

const WantToSee = () => {
  const wantToWatchList = useSelector(state=>state.wantToSee.wantToSeeList)

  return (
    <>
      <div className='row'>
        {wantToWatchList.map(movie=>{
          return <MovieCard movie={movie} className="col-2"/>
        })}
      </div>
    </>
  )
}

export default WantToSee
