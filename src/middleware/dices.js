/* eslint-disable no-console */
import axios from 'axios';

/* http://roll.diceapi.com/ */

import {
  FETCH_RESULT,
  fetchResult,
} from '../actions';

const dices = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RESULT: {
      // traduction intention d'aller chercher ce putain de dé
      axios.get('http://roll.diceapi.com/json/d6')
      // ENSUITE j'ai une réponse et là je décide j'en fais quoi ? Moi je veux afficher cette réponse. Donc je veux que ma data aille dans mon state, qui va être affiché.
      // J'ai l'intention de modifier le state (et de tuer quelques collègues, mais sans reducer.)
      // intention = modification du state ? dispatch d'une action et traduction dans le reducer
        .then((response) => {
          console.log(response.data.dice);
          const saveDice = fetchResult(response.data.dice);
          store.dispatch(saveDice);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default dices;
