import React from 'react'
import MovieCard from './MovieCard';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieSlider = ({moviesProp}) => {
    const settings = {
        dots: true,             
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
      }

    let shortList = []
    for(let i = 0; i>16; i++){
        console.log('inside for loop')
        shortList.push(moviesProp[i])
    }  
  return (
    <>
      <Slider {...settings} className='slider'>
          {moviesProp.map(movie =>{
            
            return <MovieCard key={movie.id} movie={movie}/>
          })}
        </Slider>
    </>
  )
}

export default MovieSlider
