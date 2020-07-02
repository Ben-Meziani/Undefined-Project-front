import {
  ROLL_DICE,
  SAVE_RESULTS,
} from '../actions';

import { getNextId } from '../selectors';

const initialState = {
  dice: 0,
  dicesResults: [
    {
      result: null,
      id: 0,
    },
  ],
};

const diceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ROLL_DICE:
      return {
        ...state,
        dice: action.dice,
      };
    case SAVE_RESULTS: {
      console.log('reducer SAVE_RESULTS', state.dice);
      const id = getNextId(state.dicesResults);
      const newResults = [
        ...state.dicesResults,
      ];
      const newResult = {
        result: state.dice,
        id,
      };
      newResults.push(newResult);
      console.log(newResult);
      return {
        ...state,
        dicesResults: newResults,
        dice: 0,
      };
    }
    default:
      return state;
  }
};


export default diceReducer;
