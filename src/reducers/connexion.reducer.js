// connexion.reducer : cases linked to the user's connexion

import {
  CHANGE_VALUE,
  LOGIN_REQUEST,
  FINISH_LOADING,
  CONNECT,
  AUTH_SUCCESS,
} from 'src/actions';

export const initialState = {

  email: '',
  password: '',

  responseLoading: false,
  userLogged: false,
  userToken: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        responseLoading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        responseLoading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userLogged: true,
        userToken: action.connexion,
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

export default reducer;
