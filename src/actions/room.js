// ACTION TYPES

// GENERAL
export const CREATE_ROOM = 'CREATE_ROOM';
export const SAVE_ROOM_ID = 'SAVE_ROOM';

// CHATROOM
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const WS_CONNECT = 'WS_CONNECT';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const TOGGLE_OPEN_CHAT = 'TOGGLE_OPEN_CHAT';

// ACTION CREATORS

// GENERAL
export const createRoom = () => ({
  type: CREATE_ROOM,
});

export const saveRoomId = (roomId) => ({
  type: SAVE_ROOM_ID,
  roomId,
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
export const toggleOpenChat = () => ({
  type: TOGGLE_OPEN_CHAT,
});
