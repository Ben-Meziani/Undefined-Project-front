import {
  SHOW_AVATAR,
} from '../actions';
import {
  SAVE_USER,
  LOGOUT,
  LOGIN,
  CHANGE_INPUT_VALUE,
  REGISTER,

} from '../actions/user';

const initialState = {
  users: [],
  email: '',
  password: '',
  pseudo: '',
  logged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        users: action.userDatas,
      };
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    case REGISTER:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default user;