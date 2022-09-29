import {ADD_TO_WANTTOSEE} from '../actions/types'

const wantToSee = (state, action) => {
    
    if(state === undefined){
        state = {
            wantToSeeList : [], 
            numberOfItemsInList: 0
        }
    }


    switch(action.type){
        case ADD_TO_WANTTOSEE: 
                //quantity

            return {
                ...state, 
                wantToSeeList: state.cartItems.concat(action.product), 
                numberOfItemsInList: state.numberOfItems + 1, 
            }

        default: 
            return state;
    }

    
}


export default wantToSee;