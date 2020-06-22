 
import {
  SHOW_AVATAR,
} from 'src/actions';
import { SAVE_USER} from 'src/actions/user';

const initialState = {
  userDatas: [],
import {
  TOGGLE_OPEN,
  CHANGE_VALUE,
  DROPDOWN_CHANGE,
} from '../actions';

const initialState = {
  open: false,
  logged: false,
  roomName: '',
  playersNb: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        userDatas: action.user,
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
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
