
import {LOAD_BEST_MOVIES} from '../actions/types'
const bestmoviesReducer = (state, action) => {
    
    if(state === undefined){
        state = {
            bestMoviesList : []
         
        }
    }

    switch(action.type){
        case LOAD_BEST_MOVIES: 
            return {
                ...state,
                bestMoviesList: action.payload 

            }

        default: 
            return state;
    }


    // return state;
}

export default bestmoviesReducer;