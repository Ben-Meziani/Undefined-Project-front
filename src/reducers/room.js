import {
  CREATE_ROOM,
  CHANGE_TEXT,
  RECEIVE_MESSAGE,
  TOGGLE_OPEN_CHAT,
} from '../actions';

const initialState = {
  open: false,
  chatOpen: true,
  logged: false,
  roomName: '',
  roomId: '',
  playersNb: 0,

  text: '',
  chatMessages: [
    {
      author: '',
      content: '',
      id: '',
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
      // console.log('reducer RECEIVE_MESSAGE', action.chatMessage);
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
    case TOGGLE_OPEN_CHAT:
      return {
        ...state,
        chatOpen: !state.chatOpen,
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
