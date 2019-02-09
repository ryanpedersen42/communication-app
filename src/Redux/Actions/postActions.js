import {
  SUBMIT_POST
} from '../Constants/Constants'

export function newPost(newPost) {
  return {
    type: SUBMIT_POST,
    payload: {
      post: newPost
    }
  }
}