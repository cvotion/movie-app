import {LOAD_IN_THEATERS} from './types'

export const loadInTheaters = (data) => {
    
    return {
        type: LOAD_IN_THEATERS, 
        payload: data
    }
}