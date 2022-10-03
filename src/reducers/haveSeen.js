import {ADD_TO_SEEN} from '../actions/types'

const haveSeen = (state, action) => {
    
    if(state === undefined){
        state = {
            watchedList : [], 
            numberOfItemsInList: 0
        }
    }


    switch(action.type){
        case ADD_TO_SEEN: 
                //quantity

            return {
                ...state, 
                watchedList: state.watchedList.concat(action.payload), 
                numberOfItemsInList: state.numberOfItems + 1, 
            }

        default: 
            return state;
    }

    
}


export default haveSeen;