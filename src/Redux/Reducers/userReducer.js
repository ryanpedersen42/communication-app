import {
  UPDATE_USER,
  SIGN_IN
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
        // return Object.assign({}, state, { user: action.payload });
      case SIGN_IN: 
        return Object.assign({}, state, {isSignedIn: true});
      default:
        return state;
    }
  }