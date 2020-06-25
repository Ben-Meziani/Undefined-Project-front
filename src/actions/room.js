// ACTION TYPES

// GENERAL
export const CREATE_ROOM = 'CREATE_ROOM';

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
