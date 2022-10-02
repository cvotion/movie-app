import './App.css';
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadInTheaters} from './actions/inTheatersAction'
import {loadComingSoon} from './actions/comingSooonAction'
import MovieSlider from './components/MovieSlider'
import MovieCard from './components/MovieCard';

// k_ynldn2vr, k_aks02gus')

function App() {

  
  const dispatch = useDispatch()
  const moviesInTheaters = useSelector(state=> state.inTheaters.InTheatersList)
  const numberOfWantToSee = useSelector(state=> state.wantToSee.numberOfItemsInList)
  const numberOfWatched = useSelector(state=> state.haveSeen.numberOfItemsInList)
  const moviesComingSoon = useSelector(state=> state.comingSoon.comingSoonList) 

  const getNowPlaying = async () => {
    let results = await fetch('https://imdb-api.com/en/API/InTheaters/k_aks02gus')
    let data = await results.json()
    dispatch(loadInTheaters(data.items))
    console.log(`inside`, data.items)
  }

  const getComingSoon = async () => {
    let results = await fetch('https://imdb-api.com/en/API/ComingSoon/k_aks02gus')
    let data = await results.json()
    dispatch(loadComingSoon(data.items))
    console.log(`inside`, data.items)
  }
  
  useEffect(()=>{
    getNowPlaying()
    getComingSoon()
    console.log('useEffect', moviesInTheaters)
    
  }, [])
  return (
    <div className="App">
      <h1>There are {numberOfWantToSee} Movies that you want to see</h1>
      <h1>Movies watched: {numberOfWatched} </h1>
      <div className='list'>
        <h2>In Theaters</h2>
        <MovieSlider moviesProp={moviesInTheaters}/>
      </div>
      <br/>
      <br/>
      <div className="list">
        <h2>Coming Soon</h2>
        <MovieSlider moviesProp={moviesComingSoon}/>
      </div>
      
      

    </div>
  );
}

export default App;
