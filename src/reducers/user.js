import {
  SHOW_AVATAR
} from '../actions';
import { SAVE_USER, LOGOUT } from '../actions/user';

const initialState = {
  userDatas: [],
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        userDatas: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};

export default user;