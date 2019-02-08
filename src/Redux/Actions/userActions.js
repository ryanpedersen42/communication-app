import {
  UPDATE_USER,
  SHOW_ERROR, 
  SIGN_IN
} from '../Constants/Constants'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function signIn(authStatus) {
  return {
    type: SIGN_IN,
    payload: {
      status: authStatus
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