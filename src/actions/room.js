// ACTION TYPES

// GENERAL
export const CREATE_ROOM = 'CREATE_ROOM';

// CHATROOM
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';

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
