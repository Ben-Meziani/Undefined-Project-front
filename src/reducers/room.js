import {
  CHANGE_VALUE,
  CREATE_ROOM,
  DROPDOWN_CHANGE,
  SAVE_ROOM_ID,
  CHANGE_TEXT,
  RECEIVE_MESSAGE,
  TOGGLE_OPEN_CHAT,
} from '../actions';

const initialState = {
  open: false,
  chatOpen: true,
  logged: false,
  roomName: '',
  roomId: 0,
  playersNb: 0,
  playersList: [
    {
      pseudo: 'Groot',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 7,
    },
    {
      pseudo: 'Rocket',
      icon: 'https://figurinepop.com/public/2019/11/rocketholiday1_1.jpg',
      id: 8,
    },
    {
      pseudo: 'Alphonse',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 9,
    },
    {
      pseudo: 'Patrick',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 10,
    },
    {
      pseudo: 'JeanMi',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 11,
    },
    {
      pseudo: 'Egmond',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 12,
    },
    {
      pseudo: 'Egmond',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 13,
    },
    {
      pseudo: 'Egmond',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 14,
    },
    {
      pseudo: 'Egmond',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 15,
    },
    {
      pseudo: 'Egmond',
      icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7987a60d-5266-4eb6-9adf-ea9f92b38af1/dclxmrl-0f31717b-ab84-4f85-b2fc-7364492d0ef9.png',
      id: 16,
    },
  ],
  text: '',
  chatMessages: [
    {
      author: '',
      content: '',
      id: 0,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // GENERAL CASES
    case CREATE_ROOM:
      return {
        ...state,
        roomName: action.roomName,
        playersNb: action.playersNb,
      };
    case SAVE_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
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

    case CHANGE_VALUE:
      return {
        ...state,
        roomName: action.value,
      };
    case DROPDOWN_CHANGE:
      return {
        ...state,
        playersNb: action.selectedValue,
      };
    default:
      return state;
  }
};

export default reducer;
