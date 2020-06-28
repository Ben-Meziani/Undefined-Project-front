/* eslint-disable no-console */
import axios from 'axios';

/* http://roll.diceapi.com/ */

import {
  FETCH_RESULT,
} from '../actions';

const dices = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RESULT: {
      const randomRoll = ((sides = 6) => {
        return Math.floor(Math.random() * sides) + 1;
      });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default dices;
