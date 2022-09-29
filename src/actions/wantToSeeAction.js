import {ADD_TO_WANTTOSEE} from './types'

const addToWantToSee = (item) => {
  return {
    type: ADD_TO_WANTTOSEE,
    payload: item
  }
}
