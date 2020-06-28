import { combineReducers } from 'redux';

import user from './user';
import reducer from './reducer';
import upload from './upload';
import room from './room';
import dices from './dices';

export default combineReducers({
  reducer,
  user,
  upload,
  room,
  dices,
});
