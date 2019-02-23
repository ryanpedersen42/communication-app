import {
  UPDATE_USER,
  SIGN_OUT
} from '../Constants/Constants'
const initialState = {
  isSignedIn: false,
  user: ''
}
export default function userReducer(state=initialState, action) {
    switch (action.type) {
      case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        isSignedIn: Object.keys(action.payload).length > 0 ? true : false,
        }
      case SIGN_OUT: 
        return Object.assign({}, state, {isSignedIn: false, user: ''});
      default:
        return state;
    }
  }