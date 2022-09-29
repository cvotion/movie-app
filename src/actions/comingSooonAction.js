import {LOAD_COMING_SOON} from './types'

export const loadComingSoon = (data) => {
    
    return {
        type: LOAD_COMING_SOON, 
        payload: data
    }
}