import {
  TOGGLE_OPEN,
  CHANGE_VALUE,
  DROPDOWN_CHANGE,
  LOGOUT,
  LOGIN,
  REGISTER,
  LOADING,
  CONNECT,
  CHANGE_FILE,
} from '../actions';

const initialState = {
  users: [],
  email: '',
  password: '',
  pseudo: '',
  avatarImg: '',
  logged: false,
  open: false,
  roomName: '',
  playersNb: 0,
  loading: false,
  userRegistered: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case DROPDOWN_CHANGE:
      return {
        ...state,
        playersNb: action.selectedValue,
      };
    case LOGIN:
      return {
        ...state,
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
    case LOADING:
      return {
        ...state,
        loading: false,
      };
    case CONNECT:
      return {
        ...state,
        logged: true,
      };
    case CHANGE_FILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default user;
