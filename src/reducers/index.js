import { combineReducers } from 'redux';
import register from './register.reducer';
import connexion from './connexion.reducer';
import user from './user';
import reducer from './reducer';

export default combineReducers({
  register,
  connexion,
  reducer,
  user,

});
