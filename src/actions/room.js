export const CREATE_ROOM = 'CREATE_ROOM';
export const SAVE_ROOM_ID = 'SAVE_ROOM';

export const createRoom = () => ({
  type: CREATE_ROOM,
});

export const saveRoomId = (roomId) => ({
  type: SAVE_ROOM_ID,
  roomId,
});
