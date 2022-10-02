import {ADD_TO_WANTTOSEE, REMOVE_FROM_WANTTOSEE} from './types'

export const addToWantToSee = (item) => {
  return {
    type: ADD_TO_WANTTOSEE,
    payload: item
  }
}
export const removeFromWantToSee = (id) => {
  return {
    type: REMOVE_FROM_WANTTOSEE,
    id: id
  }
}
