import {
  ROLL_DICE,
} from '../actions';

const initialState = {
  dice: null,
};

const diceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ROLL_DICE:
      return {
        ...state,
        dice: action.dice,
      };
    default:
      return state;
  }
};

export default diceReducer;
