import axios from 'axios';

import { LOGOUT } from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGOUT:
      console.log('je me déconnecte');
      axios.post('http://ec2-54-234-79-207.compute-1.amazonaws.com/logout', {}, {
        withCredentials: true,
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;