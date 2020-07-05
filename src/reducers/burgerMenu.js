import {
  TOGGLE_MENU,
} from '../actions';

const initialState = {
  isOpen: false,
};

const burgerMenu = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default burgerMenu;
