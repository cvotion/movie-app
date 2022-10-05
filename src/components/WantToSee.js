import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MovieCard from './MovieCard'

const WantToSee = () => {
  const wantToWatchList = useSelector(state=>state.wantToSee.wantToSeeList)

  return (
    <>
      <h1>Want to Watch</h1>
    <div className='mainContainer'>
    <div className='moviesContainer row'>
        {wantToWatchList.map(movie=>{
          return <div className='col-3 d-flex justify-content-center movieCard'>
            <MovieCard movie={movie}/>
          </div>
        })}
      
      </div>
    </div>
    </>
  )
}

export default WantToSee
