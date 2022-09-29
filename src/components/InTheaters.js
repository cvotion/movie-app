import React from 'react'
import {useSelector} from 'react-redux'


const InTheaters = () => {

    const moviesInTheaters = useSelector(state=> state.inTheaters.InTheatersList) 
    console.log('in component', moviesInTheaters)
  return (
    <div className='moviesContainer row'>
      {moviesInTheaters.map(movie=>{
        return <div className='movieCard col'>
          <img src={movie.image} width='200px' height='280px'/>
          <h4>{movie.title}</h4>
          <p className='lead'>{movie.contentRating} | {movie.genres}</p>
          <br/>
          <div className='row'><button>Want to watch</button> <button>Add to Watched List</button></div>
        </div>
      })}
      
    </div>
  )
}

export default InTheaters
