import {ADD_TO_SEEN} from './types'

const addToWantToSee = (item) => {
  return {
    type: ADD_TO_SEEN,
    payload: item
  }
}