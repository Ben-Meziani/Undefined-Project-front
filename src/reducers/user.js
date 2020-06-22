import {
  TOGGLE_OPEN,
  CHANGE_VALUE,
  DROPDOWN_CHANGE,
} from 'src/actions';
import { LOGOUT } from 'src/actions/user';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,
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

    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        roomName: action.value,
      };
    case DROPDOWN_CHANGE:
      return {
        ...state,
        playersNb: action.selectedValue,

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

