// register.reducer : cases linked to the user's registration

import {
  CHANGE_VALUE,
  REGISTER_REQUEST,
  FINISH_LOADING,
  REGISTERED,
} from 'src/actions';

export const initialState = {

  email: '',
  pseudo: '',
  password: '',

  responseLoading: false,
  userRegistered: false,

  userLogged: false,
  // TODO user registrated immediatly logged and can go to his account.
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        responseLoading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        responseLoading: false,
      };
    case REGISTERED:
      return {
        ...state,
        userRegistered: true,
      };
    default:
      return state;
  }
};

export default reducer;
