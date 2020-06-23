import {
  CREATE_ROOM,
} from '../actions/room';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        roomName: 'testRoom',
        playersNb: 0,
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
