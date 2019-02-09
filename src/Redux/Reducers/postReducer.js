import {
POST_SUCCESS,
} from '../Constants/Constants'

const initialPostState = {
  post: '',
  username: '',
  user: ''
}
export default function userReducer(state=initialPostState, action) {
    switch (action.type) {
      case POST_SUCCESS:
        return action.payload.user;
        // return Object.assign({}, state, { user: action.payload.user });
      default:
        return state;
    }
  }