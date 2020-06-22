import { combineReducers } from 'redux';
<<<<<<< HEAD
import register from './register.reducer';
import connexion from './connexion.reducer';
import user from './user';
import reducer from './reducer';

export default combineReducers({
  register,
  connexion,
  reducer,
  user,

=======
import reducer from './reducer';
import user from './user';

export default combineReducers({
  reducer,
  user,
>>>>>>> master
});
