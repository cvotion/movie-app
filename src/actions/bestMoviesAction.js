import {LOAD_BEST_MOVIES} from './types'

export const loadComingSoon = (data) => {
    
    return {
        type: LOAD_BEST_MOVIES, 
        payload: data
    }
}