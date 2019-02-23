import {
  UPDATE_USER,
  SHOW_ERROR, 
  SIGN_OUT
} from '../Constants/Constants'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: newUser
    }
  }

export function signOut(authStatus) {
  return {
    type: SIGN_OUT,
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