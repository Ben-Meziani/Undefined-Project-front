import { combineReducers } from 'redux';

import user from './user';
import reducer from './reducer';
import room from './room';

export default combineReducers({
  reducer,
  user,
  room,

});
