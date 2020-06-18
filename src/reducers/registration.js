import {
  CHANGE_VALUE,
} from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  username: '',
  logged: false,
  loading: false,
  submitted: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
