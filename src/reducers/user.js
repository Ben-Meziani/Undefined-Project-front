import {
  TOGGLE_OPEN,
  CHANGE_VALUE,
  DROPDOWN_CHANGE,
} from 'src/actions';
import { LOGOUT } from 'src/actions/user';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,
  SHOW_AVATAR,
} from 'src/actions';
import { SAVE_USER} from 'src/actions/user';

const initialState = {
  userDatas: [],
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
    case SAVE_USER:
      return {
        ...state,
        userDatas: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
