import {
  UPDATE_USER,
  SHOW_ERROR
} from '../Constants/Constants'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'ERROR'
    }
  }
}