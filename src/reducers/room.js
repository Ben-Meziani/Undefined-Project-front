import {
  CREATE_ROOM,
} from '../actions';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,

  chatMessages: [
    {
      author: 'Harry Pot-de-Terre',
      text: 'Salut.',
      id: 1,
    },
    {
      author: 'Reun Waizlé',
      text: 'Yo.',
      id: 2,
    },
    {
      author: 'Ermi Grangé',
      text: 'Vous vous faites encore la gueule ?',
      id: 3,
    },
    {
      author: 'Reun Waizlé',
      text: 'Je préfère juste ne pas parler aux traitres.',
      id: 4,
    },
    {
      author: 'Harry Pot-de-Terre',
      text: 'T\'es juste jaloux.',
      id: 7,
    },
    {
      author: 'Ermi Grangé',
      text: 'Vous êtes chiants.',
      id: 5,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        roomName: 'testRoom',
        playersNb: 0,
      };
/*     case CHANGE_VALUE:
      return {
        ...state,
        roomName: action.value,
      }; */
/*     case DROPDOWN_CHANGE:
      return {
        ...state,
        playersNb: action.selectedValue,
      }; */
    default:
      return state;
  }
};

export default reducer;
