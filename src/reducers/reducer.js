import { TOGGLE_OPEN, CHANGE_VALUE, DROPDOWN_CHANGE } from 'src/actions';
import { LOGOUT } from 'src/actions/user';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
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
