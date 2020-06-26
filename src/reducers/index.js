import { combineReducers } from 'redux';

import user from './user';
import reducer from './reducer';
import room from './room';
import dices from './dices';

export default combineReducers({
  reducer,
  user,
  room,
  dices,

});
