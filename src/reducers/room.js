import {
  CREATE_ROOM,
  SEND_MESSAGE,
  CHANGE_TEXT,
} from '../actions';
import { getNextId } from '../selectors';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,

  text: '',
  chatMessages: [
    {
      author: 'Harry Pot-de-Terre',
      content: 'Salut.',
      id: 1,
    },
    {
      author: 'Reun Waizlé',
      content: 'Yo.',
      id: 2,
    },
    {
      author: 'Ermi Grangé',
      content: 'Vous vous faites encore la gueule ?',
      id: 3,
    },
    {
      author: 'Reun Waizlé',
      content: 'Je préfère juste ne pas parler aux traitres.',
      id: 4,
    },
    {
      author: 'Harry Pot-de-Terre',
      content: 'T\'es juste jaloux.',
      id: 7,
    },
    {
      author: 'Ermi Grangé',
      content: 'Vous êtes chiants.',
      id: 5,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // GENERAL CASES
    case CREATE_ROOM:
      return {
        ...state,
        roomName: 'testRoom',
        playersNb: 0,
      };

    // CHATROOM CASES
    case SEND_MESSAGE: {
      const id = getNextId(state.chatMessages);

      return {
        ...state,
        chatMessages: [
          ...state.chatMessages,
          {
            author: 'Neville Long-du-bras',
            content: state.text,
            id,
          },
        ],
        text: '',
      };
    }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };

      /* case CHANGE_VALUE:
      return {
        ...state,
        roomName: action.value,
      }; */
    /* case DROPDOWN_CHANGE:
      return {
        ...state,
        playersNb: action.selectedValue,
      }; */
    default:
      return state;
  }
};

export default reducer;
