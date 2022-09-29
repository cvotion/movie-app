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
        slidesToShow: 4,
        slidesToScroll: 3
      }
  return (
    <>
      <Slider {...settings} className='slider'>
          {moviesProp.map(movie =>{
            return <MovieCard movie={movie}/>
          })}
        </Slider>
    </>
  )
}

export default MovieSlider
