import {LOAD_BEST_MOVIES} from './types'

export const loadBestMovies = (data) => {
    
    return {
        type: LOAD_BEST_MOVIES, 
        payload: data
    }
}