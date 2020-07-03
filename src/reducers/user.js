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
  ERROR_LOG,
  ERROR_REG_PASSWORD,
  ERROR_PASSWORD_CHECK,
  SEND_EMAIL,
} from '../actions';

const initialState = {
  currentUser: [],
  email: '',
  password: '',
  pseudo: 'Undefined',
  id: 0,
  icon: '',
  role: 0,
  image: '',
  logged: true,
  errorToLog: false,
  roomId: '',

  open: false,
/*   roomName: '',
  roomPassword: '',
  roomId: '', */
  playersNb: 0,
  loading: false,

  userRegistered: false,
  regPassword: '',
  regPasswordCheck: '',
  regEmail: '',
  regPseudo: '',
  regIcon: '',
  errorRegPass: false,
  errorPassCheck: false,

  sendedEmail: '',
  send: false,

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
        loading: true,
        errorPassCheck: false,
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
        loading: true,
      };
    case LOADING:
      return {
        ...state,
        loading: false,
        send: true,
      };
    case CONNECT:
      return {
        ...state,
        logged: true,
        errorPassCheck: false,
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
        roomId: action.currentUser.roomId,
        role: action.currentUser.role,
        image: action.currentUser.roomImage,
        errorPassCheck: false,
      };
    }
    case SEND_USER_DATA: {
      return {
        ...state,
      };
    }
    case ERROR_LOG: {
      return {
        ...state,
        errorToLog: true,
        loading: true,
      };
    }
    case ERROR_REG_PASSWORD: {
      return {
        ...state,
        errorRegPass: true,
        logged: false,
        userRegistered: false,
        loading: true,
      };
    }
    case ERROR_PASSWORD_CHECK: {
      return {
        ...state,
        logged: false,
        userRegistered: false,
        errorPassCheck: true,
        loading: false,
      };
    }
    case SEND_EMAIL: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default user;
