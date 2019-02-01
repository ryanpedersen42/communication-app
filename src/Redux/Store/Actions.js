import {
  LOGIN_FAILURE,
  LOGIN_PENDING, 
  LOGIN_SUCCESS
} from './Constants.js'

export function fetchUserPosts() {
  //to do
}

export function fetchFollowingPosts() {
  //to do
}

export function fetchAllPosts() {
  //to do
}

export function followPost() {
  //to do
}

export function upvotePost() {
  //to do
}

export const fetchUser = (dispatch) => {
  dispatch({ type: LOGIN_PENDING })
  fetch('dbcall')
    .then(response => response.json())
    .then(data => dispatch({ type: LOGIN_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error }))
}