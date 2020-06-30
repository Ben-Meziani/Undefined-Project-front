// ACTION TYPES

// GENERAL
export const CREATE_ROOM = 'CREATE_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';
export const SAVE_ROOM_ID = 'SAVE_ROOM';
export const TOGGLE_OPEN_CHAT = 'TOGGLE_OPEN_CHAT';
export const TOGGLE_OPEN_BOOK = 'TOGGLE_OPEN_BOOK';
export const TOGGLE_OPEN_EDIT = 'TOGGLE_OPEN_EDIT';
export const TOGGLE_OPEN_BOMB = 'TOGGLE_OPEN_BOMB';
export const TOGGLE_OPEN_DICE = 'TOGGLE_OPEN_DICE';
export const TOGGLE_OPEN_SHARE = 'TOGGLE_OPEN_PICTURE';
export const TOGGLE_OPEN_PLAYERS = 'TOGGLE_OPEN_PLAYERS';

// CHATROOM
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const WS_CONNECT = 'WS_CONNECT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// ACTION CREATORS

// GENERAL
export const createRoom = () => ({
  type: CREATE_ROOM,
});

export const joinRoom = () => ({
  type: JOIN_ROOM,
});

export const saveRoomId = (roomId) => ({
  type: SAVE_ROOM_ID,
  roomId,
});

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

// CHATROOM
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
export const changeText = (value) => ({
  type: CHANGE_TEXT,
  payload: value,
});
export const wsConnect = () => ({
  type: WS_CONNECT,
});
export const receiveMessage = (chatMessage) => ({
  type: RECEIVE_MESSAGE,
  chatMessage,
});
