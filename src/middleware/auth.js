import axios from 'axios';

import { LOGOUT, LOGIN, REGISTER, saveUser } from '../actions/user';


const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGOUT:
      console.log('je me déconnecte');
      axios.get('http://ec2-54-234-79-207.compute-1.amazonaws.com/logout', {
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;