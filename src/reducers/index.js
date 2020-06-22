import { combineReducers } from 'redux';
import register from './register.reducer';
import connexion from './connexion.reducer';

export default combineReducers({
  register,
  connexion,

});
