import {
  CHANGE_VALUE,
  CREATE_ROOM,
  JOIN_ROOM,
  SAVE_ROOM,
  DROPDOWN_CHANGE,
  CHANGE_TEXT_CHAT,
  CHANGE_TEXT_NOTE,
  RECEIVE_MESSAGE,
  SEND_NOTE,
  TOGGLE_OPEN_CHAT,
  TOGGLE_OPEN_BOOK,
  TOGGLE_OPEN_EDIT,
  TOGGLE_OPEN_BOMB,
  TOGGLE_OPEN_DICE,
  TOGGLE_OPEN_SHARE,
  TOGGLE_OPEN_PLAYERS,
  TOGGLE_OPEN_MENU,
  ERROR_JOIN_ROOM,
} from '../actions';

import { getNextId } from '../selectors';

const initialState = {
  open: false,
  chatOpen: false,
  bookOpen: false,
  editOpen: false,
  playerNotes: [
    {
      content: 'First note',
      id: 3,
    },
    {
      content: 'Second note',
      id: 2,
    },
  ],
  textNote: '',
  loading: false,
  bombOpen: false,
  diceOpen: false,
  pictureOpen: false,
  playersOpen: false,
  active: false,
  /* logged: false, */

  roomName: 'Harry Pouffeur and the Haunted Dungeons',
  roomId: '',
  roomPassword: '',
  idForJoin: '',
  passForJoin: '',
  joinedRoom: false,
  errorJoinedRoom: false,
  createdRoom: false,

  playersNb: 0,
  playersList: [
    {
      pseudo: 'Luna',
      icon: '',
      id: 7,
      role: '',
    },
    {
      pseudo: 'Rogue',
      icon: '',
      id: 8,
      role: '',
    },
    {
      pseudo: 'Fol-Oeil',
      icon: '',
      id: 9,
      role: '',
    },
    {
      pseudo: 'Harry',
      icon: '',
      id: 10,
      role: '',
    },
    {
      pseudo: 'Drago',
      icon: '',
      id: 11,
      role: '',
    },
    {
      pseudo: 'Dobby',
      icon: '',
      id: 12,
      role: '',
    },
    {
      pseudo: 'Ron',
      icon: '',
      id: 13,
      role: '',
    },
    {
      pseudo: 'Albus',
      icon: '',
      id: 14,
      role: '',
    },
    {
      pseudo: 'Hedwige',
      icon: '',
      id: 15,
      role: '',
    },
  ],
  textMessage: '',
  chatMessages: [
    {
      author: 'Albus',
      content: 'Salut ça farte ?!',
      id: 9,
    },
    {
      author: 'Drago',
      content: 'Ca farte ? Mais bro on dit plus ça depuis 20 ans pfff',
      id: 7,
    },
    {
      author: 'Tana\'gru',
      content: 'T\'aurais-tu besoin de tabarnak de lorem ipsum québécois au lieu de sacrament de latin ?',
      id: 17,
    },
    {
      author: 'Tana\'gru',
      content: 'Prend-ça dans ta câlice de yeule pis achâle-moé pu.',
      id: 18,
    },
    {
      author: 'Tana\'gru',
      content: 'Tu sais pas quessé que c\'est du lorem ipsum ? ',
      id: 19,
    },
    {
      author: 'Tana\'gru',
      content: 'Ben déguédine, t\'as rien à crisser icite.',
      id: 20,
    },
    {
      author: 'Tana\'gru',
      content: 'Arrête de faire la baboune tabaslack, a va fondre la slutch.',
      id: 21,
    },
  ],
};

const room = (state = initialState, action = {}) => {
  switch (action.type) {
    // GENERAL CASES
    case CREATE_ROOM:
      return {
        ...state,
        loading: true,
        createdRoom: true,
        roomId: action.roomId, // a delete si rien ne change
      };
    case SAVE_ROOM:
      return {
        ...state,
        roomId: action.uniqueId,
      };
    case JOIN_ROOM:
      return {
        ...state,
        player: action.pseudo,
        playerIcon: action.icon,
        joinedRoom: true,
        loading: true,
        errorJoinedRoom: false,
        roomId: action.roomId,
        /* playerRole: true, */
      };
    case ERROR_JOIN_ROOM:
      return {
        ...state,
        loading: false,
        errorJoinedRoom: true,
        joinedRoom: false,
      };
    case TOGGLE_OPEN_CHAT:
      return {
        ...state,
        chatOpen: !state.chatOpen,
      };
    case TOGGLE_OPEN_BOOK:
      return {
        ...state,
        bookOpen: !state.bookOpen,
      };
    case TOGGLE_OPEN_EDIT:
      return {
        ...state,
        editOpen: !state.editOpen,
      };
    case TOGGLE_OPEN_BOMB:
      return {
        ...state,
        bombOpen: !state.bombOpen,
      };
    case TOGGLE_OPEN_DICE:
      return {
        ...state,
        diceOpen: !state.diceOpen,
      };
    case TOGGLE_OPEN_SHARE:
      return {
        ...state,
        pictureOpen: !state.pictureOpen,
      };
    case TOGGLE_OPEN_PLAYERS:
      return {
        ...state,
        playersOpen: !state.playersOpen,
      };
    case TOGGLE_OPEN_MENU:
      return {
        ...state,
        active: !state.active,
      };

    // CHATROOM
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
        textMessage: '',
      };
    }
    case CHANGE_TEXT_CHAT:
      return {
        ...state,
        textMessage: action.payload,
      };
      // PLAYER'S NOTES
    case CHANGE_TEXT_NOTE:
      return {
        ...state,
        textNote: action.payload,
      };
    case SEND_NOTE: {
      const newPlayerNotes = [
        ...state.playerNotes,
      ];
      const id = getNextId(state.playerNotes);
      const newNote = {
        content: state.textNote,
        id,
      };
      newPlayerNotes.push(newNote);
      return {
        ...state,
        playerNotes: newPlayerNotes,
        textNote: '',
      };
    }
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
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

export default room;
