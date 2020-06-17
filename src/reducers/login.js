import { CHANGE } from 'src/actions';

const initialState = {

};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default login;
