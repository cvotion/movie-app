
import {LOAD_IN_THEATERS} from '../actions/types'
const productsReducer = (state, action) => {
    
    if(state === undefined){
        state = {
            InTheatersList : []
         
        }
    }

    switch(action.type){
        case LOAD_IN_THEATERS: 
            return {
                ...state,
                InTheatersList: action.payload 

            }

        default: 
            return state;
    }


    // return state;
}

export default productsReducer;