import {
  CHANGE_VALUE,
  CREATE_ROOM,
  DROPDOWN_CHANGE,
  SAVE_ROOM_ID,
} from '../actions';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  roomId: 0,
  playersNb: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

export default reducer;
