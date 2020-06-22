import {
  TOGGLE_OPEN,
  CHANGE_VALUE,
  DROPDOWN_CHANGE,
  SHOW_AVATAR,
  SAVE_USER,
  LOGOUT,
  LOGIN,
  CHANGE_INPUT_VALUE,
  REGISTER,
  FINISH_LOADING,
  CONNECT,
} from 'src/actions';


const initialState = {
  users: [],
  email: '',
  password: '',
  pseudo: '',
  logged: false,  
  open: false,
  roomName: '',
  playersNb: 0,
  responseLoading: false,
  responseLoading: false,
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
      case FINISH_LOADING:
        return {
          ...state,
          responseLoading: false,
        };
        case CONNECT:
          return {
            ...state,
            userLogged: true,
          };
    default:
      return state;
  }
};


export default user;

