import {combineReducers} from 'redux'
import wantToSee from './wantToSee'
import haveSeen from './haveSeen'
import inTheatersReducer from './inTheatersReducer'
import comingSoonReducer from './comingSoonReducer'

const rootReducer = combineReducers({
    wantToSee: wantToSee, 
    haveSeen: haveSeen,
    inTheaters: inTheatersReducer,
    comingSoon: comingSoonReducer
})

export default rootReducer
