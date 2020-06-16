import { TOGGLE_OPEN } from '../actions';

const initialState = {
  open: true,
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default counter;
