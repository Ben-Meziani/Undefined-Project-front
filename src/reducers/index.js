import { combineReducers } from 'redux';

import user from './user';
import reducer from './reducer';
import upload from './upload';
import room from './room';
import dices from './dices';
import burgerMenu from './burgerMenu';

export default combineReducers({
  reducer,
  user,
  upload,
  room,
  dices,
  burgerMenu,
});
