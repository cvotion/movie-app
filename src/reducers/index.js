import {combineReducers} from 'redux'
import wantToSee from './wantToSee'
import haveSeen from './haveSeen'
import inTheatersReducer from './inTheatersReducer'
import comingSoonReducer from './comingSoonReducer'
import bestmoviesReducer from './bestMoviesReducer'

const rootReducer = combineReducers({
    wantToSee: wantToSee, 
    haveSeen: haveSeen,
    inTheaters: inTheatersReducer,
    comingSoon: comingSoonReducer,
    bestMovies: bestmoviesReducer
})

export default rootReducer
