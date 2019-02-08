import {
  UPDATE_USER,
  REGISTER_PENDING
} from '../Constants/Constants'

export default function userReducer(state='', action={}) {
    switch (action.type) {
      case REGISTER_PENDING:
        return Object.assign({}, state, { isPending: true });
      case UPDATE_USER:
          return action.payload.user;
      // case REGISTER_FAILURE:
      //   return Object.assign({}, state, { error: action.payload, isPending: false });
      default:
        return state;
    }
  }