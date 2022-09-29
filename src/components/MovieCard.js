import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <>
      <div className='movieCard col'>
            <img src={movie.image} width='150px' />
            <h4>{movie.title}</h4>
            <p className='lead'>{movie.contentRating} | {movie.genres}</p>
            <br/>
            <div className='row'><button>Want to watch</button> <button>Add to Watched List</button></div>
          </div>
    </>
  )
}

export default MovieCard
