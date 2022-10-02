import {ADD_TO_SEEN} from './types'

const addToSeen = (item) => {
  return {
    type: ADD_TO_SEEN,
    payload: item
  }
}