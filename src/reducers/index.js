import { combineReducers } from 'redux';

import user from './user';
import reducer from './reducer';
import upload from './upload';

export default combineReducers({
  reducer,
  user,
  upload,
});
