 
import {
  SHOW_AVATAR,
} from 'src/actions';
import { SAVE_USER} from 'src/actions/user';

const initialState = {
  userDatas: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
