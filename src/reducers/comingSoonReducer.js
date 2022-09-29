
import {LOAD_COMING_SOON} from '../actions/types'
const productsReducer = (state, action) => {
    
    if(state === undefined){
        state = {
            comingSoonList : []
         
        }
    }

    switch(action.type){
        case LOAD_COMING_SOON: 
            return {
                ...state,
                comingSoonList: action.payload 

            }

        default: 
            return state;
    }


    // return state;
}

export default productsReducer;