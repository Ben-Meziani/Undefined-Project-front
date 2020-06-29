import {
  TOGGLE_OPEN,
  CHANGE_VALUE,
  DROPDOWN_CHANGE,
  LOGOUT,
  LOGIN,
  REGISTER,
  LOADING,
  CONNECT,
  CHECK,
  SAVE_USER,
  SEND_USER_DATA,
} from '../actions';

const initialState = {
  currentUser: [],
  email: '',
  password: '',
  pseudo: 'Undefined',
  id: 0,
  icon: '',
  logged: false,
  open: false,
  roomName: '',
  roomId: '',
  playersNb: 0,
  loading: false,
  userRegistered: false,
  regPassword: '',
  regEmail: '',
  regPseudo: '',
  regIcon: '',
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
        userRegistered: true,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        pseudo: '',
        id: 0,
        icon: '',
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
    case CHECK:
      return {
        ...state,
        logged: true,
      };
    case SAVE_USER: {
      return {
        ...state,
        pseudo: action.currentUser.pseudo,
        id: action.currentUser.id,
        icon: action.currentUser.icon,
      };
    }
    case SEND_USER_DATA: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default user;
