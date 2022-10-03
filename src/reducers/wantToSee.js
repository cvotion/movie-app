import {ADD_TO_WANTTOSEE, REMOVE_FROM_WANTTOSEE} from '../actions/types'

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
                wantToSeeList: state.wantToSeeList.concat(action.payload), 
                numberOfItemsInList: state.numberOfItemsInList + 1
            }
        case REMOVE_FROM_WANTTOSEE: 
                //quantity
            return {
                ...state, 
                wantToSeeList: state.wantToSeeList.filter(movie=>{
                    return movie.id !== action.id
                }) ,
                numberOfItemsInList: state.numberOfItemsInList - 1 
            }

        default: 
            return state;
    }

    
}


export default wantToSee;