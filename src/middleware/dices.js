/* eslint-disable no-console */
import axios from 'axios';

/* http://roll.diceapi.com/ */

import {
  THROW_DICES,
  displayResult,
} from '../actions';

const dices = (store) => (next) => (action) => {
  switch (action.type) {
    case THROW_DICES: {
      // traduction intention d'aller chercher ce putain de dé
      axios.get('http://roll.diceapi.com/json/d6')
      // ENSUITE j'ai une réponse et là je décide j'en fais quoi ? Moi je veux afficher cette réponse. Donc je veux que ma data aille dans mon state, qui va être affiché.
      // J'ai l'intention de modifier le state (et de tuer quelques collègues, mais sans reducer.)
      // intention = modification du state ? dispatch d'une action et traduction dans le reducer
        .then((response) => {
          console.log(response.data.dice.value);
          const displayThrowDicesResult = displayResult(response.data.dice);
          store.dispatch(displayThrowDicesResult);
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


/* http://www.randomnumberapi.com/api/v1.0/random?min=1&max=6&count=1 */
