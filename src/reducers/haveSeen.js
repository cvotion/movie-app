import {ADD_TO_SEEN} from '../actions/types'

const wantToSee = (state, action) => {
    
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
                watchedList: state.cartItems.concat(action.product), 
                numberOfItemsInList: state.numberOfItems + 1, 
            }

        default: 
            return state;
    }

    
}


export default wantToSee;