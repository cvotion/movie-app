import './App.css';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadInTheaters} from './actions/inTheatersAction'
import {loadComingSoon} from './actions/comingSooonAction'
import {loadBestMovies} from './actions/bestMoviesAction'
import MovieSlider from './components/MovieSlider'
import MovieCard from './components/MovieCard';

// k_ynldn2vr, k_aks02gus')

function App() {

  
  const dispatch = useDispatch()
  const moviesInTheaters = useSelector(state=> state.inTheaters.InTheatersList)
  const numberOfWantToSee = useSelector(state=> state.wantToSee.numberOfItemsInList)
  const numberOfWatched = useSelector(state=> state.haveSeen.numberOfItemsInList)
  const moviesComingSoon = useSelector(state=> state.comingSoon.comingSoonList) 
  const bestMovies = useSelector(state=> state.bestMovies.bestMoviesList)

  const getNowPlaying = async () => {
    let results = await fetch('https://imdb-api.com/en/API/InTheaters/k_ynldn2vr')
    let data = await results.json()
    let newlist = data.items.map(movieObj=>{
      return {
        ...movieObj,
        want: false,
        wacthed: false 
      }
    })
    dispatch(loadInTheaters(newlist))
  }
  
  const getComingSoon = async () => {
    let results = await fetch('https://imdb-api.com/en/API/ComingSoon/k_ynldn2vr')
    let data = await results.json()
    dispatch(loadComingSoon(data.items))
  }

  const getBestMovies = async () => {
    let results = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ynldn2vr')
    let data = await results.json()
    dispatch(loadBestMovies(data.items))

  }
  
  useEffect(()=>{
    if(moviesInTheaters === null || moviesInTheaters[0] === undefined || moviesInTheaters === []){
      getNowPlaying()
      getComingSoon()
      getBestMovies()
    }
    
  }, [])
  
  return (
    <div className="App">
      <h1>There are {numberOfWantToSee} Movies that you want to see</h1>
      <h1>Movies watched: {numberOfWatched} </h1>
      <div className='list'>
        <h2>In Theaters</h2>
        <MovieSlider moviesProp={moviesInTheaters}/>
      </div>
      {/* <br/>
      <br/>
      <div className="list">
        <h2>Coming Soon</h2>
        <MovieSlider moviesProp={moviesComingSoon}/>
      </div> */}
      <br/>
      <br/>
      <div className="list">
        <h2>Top Movies of All Time</h2>
        <MovieSlider moviesProp={bestMovies}/>
      </div>
      
      

    </div>
  );
}

export default App;
