// ACTION TYPES

// GENERAL
export const CREATE_ROOM = 'CREATE_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';
export const SAVE_ROOM = 'SAVE_ROOM';
export const ERROR_JOIN_ROOM = 'ERROR_JOIN_ROOM';

// TOGGLES
export const TOGGLE_OPEN_CHAT = 'TOGGLE_OPEN_CHAT';
export const TOGGLE_OPEN_BOOK = 'TOGGLE_OPEN_BOOK';
export const TOGGLE_OPEN_EDIT = 'TOGGLE_OPEN_EDIT';
export const TOGGLE_OPEN_BOMB = 'TOGGLE_OPEN_BOMB';
export const TOGGLE_OPEN_DICE = 'TOGGLE_OPEN_DICE';
export const TOGGLE_OPEN_SHARE = 'TOGGLE_OPEN_SHARE';
export const TOGGLE_OPEN_PLAYERS = 'TOGGLE_OPEN_PLAYERS';
export const TOGGLE_OPEN_MENU = 'TOGGLE_OPEN_MENU';

// CHATROOM
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT_CHAT = 'CHANGE_TEXT_CHAT';
export const WS_CONNECT = 'WS_CONNECT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// PLAYER'S NOTES
export const CHANGE_TEXT_NOTE = 'CHANGE_TEXT_NOTE';
export const SEND_NOTE = 'SEND_NOTE';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';

// ACTION CREATORS

// GENERAL
export const createRoom = () => ({
  type: CREATE_ROOM,
});

export const joinRoom = () => ({
  type: JOIN_ROOM,
});

export const saveRoom = () => ({
  type: SAVE_ROOM,
});

export const errorJoinRoom = () => ({
  type: ERROR_JOIN_ROOM,
});

// TOGGLE

export const toggleOpenChat = () => ({
  type: TOGGLE_OPEN_CHAT,
});

export const toggleOpenBook = () => ({
  type: TOGGLE_OPEN_BOOK,
});

export const toggleOpenEdit = () => ({
  type: TOGGLE_OPEN_EDIT,
});

export const toggleOpenBomb = () => ({
  type: TOGGLE_OPEN_BOMB,
});

export const toggleOpenDice = () => ({
  type: TOGGLE_OPEN_DICE,
});

export const toggleOpenShare = () => ({
  type: TOGGLE_OPEN_SHARE,
});

export const toggleOpenPlayers = () => ({
  type: TOGGLE_OPEN_PLAYERS,
});

export const toggleOpenMenu = () => ({
  type: TOGGLE_OPEN_MENU,
});

// CHATROOM
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
export const changeTextChat = (value) => ({
  type: CHANGE_TEXT_CHAT,
  payload: value,
});
export const wsConnect = () => ({
  type: WS_CONNECT,
});
export const receiveMessage = (chatMessage) => ({
  type: RECEIVE_MESSAGE,
  chatMessage,
});

// PLAYER'S NOTES

export const changeTextNote = (value) => ({
  type: CHANGE_TEXT_NOTE,
  payload: value,
});
export const sendNote = () => ({
  type: SEND_NOTE,
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note,
});
