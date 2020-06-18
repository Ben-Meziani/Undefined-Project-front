import { combineReducers } from 'redux';
import user from './user';
import registration from './registration';

export default combineReducers({
  user,
  registration,
});
