import {
  FETCH_RESULT,
  REROLL,
} from '../actions';

const initialState = {
  throwed: false,
  dice: [
    {
      value: 4,
      type: 'd6',
    },
  ],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RESULT: {
      return {
        ...state,
        value: action.dice.value,
        type: action.dice.type,
        throwed: true,
      };
    }
    case REROLL: {
      return {
        ...state,
        dice: [],
        throwed: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
