import {
  UPDATE_USER,
  REGISTER_PENDING,
  SIGN_IN
} from '../Constants/Constants'
const initialState = {
  isSignedIn: false,
  user: ''
}
export default function userReducer(state=initialState, action) {
    switch (action.type) {
      // case REGISTER_PENDING:
      //   return Object.assign({}, state, { isPending: true });
      case UPDATE_USER:
        return Object.assign({}, state, { user: action.payload.user });
      case SIGN_IN: 
        return Object.assign({}, state, {isSignedIn: true});
      default:
        return state;
    }
  }