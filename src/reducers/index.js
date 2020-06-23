import { combineReducers } from 'redux';

import user from './user';
import reducer from './reducer';

export default combineReducers({
  reducer,
  user,

});
