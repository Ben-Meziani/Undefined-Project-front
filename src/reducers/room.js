import {
  CREATE_ROOM,
  CHANGE_TEXT,
  RECEIVE_MESSAGE,
} from '../actions';

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
      id: 456,
    },
    {
      author: 'Reun Waizlé',
      content: 'Yo.',
      id: 4564,
    },
    {
      author: 'Ermi Grangé',
      content: 'Vous vous faites encore la gueule ?',
      id: 56,
    },
    {
      author: 'Reun Waizlé',
      content: 'Je préfère juste ne pas parler aux traitres.',
      id: 789,
    },
    {
      author: 'Harry Pot-de-Terre',
      content: 'T\'es juste jaloux.',
      id: 764,
    },
    {
      author: 'Ermi Grangé',
      content: 'Vous êtes chiants.',
      id: 786,
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
    case RECEIVE_MESSAGE: {
      console.log('reducer RECEIVE_MESSAGE', action.chatMessage);
      const newChatMessages = [
        ...state.chatMessages,
      ];
      const newChatMessage = {
        ...action.chatMessage,
      };
      newChatMessages.push(newChatMessage);
      return {
        ...state,
        chatMessages: newChatMessages,
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
