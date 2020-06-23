import axios from 'axios';

import { SEND_AVATAR, GET_AVATAR } from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_AVATAR: {
      const state = store.getState();
      console.log('j\'envoie un avatar au serveur');
      console.log(state);
      axios.get(`${serverURI}/user/1/icon`, {
      })
        .then((response) => {
          console.log(response);
        });
      next(action);
      break;
    }
    case GET_AVATAR: {
      const state = store.getState();
      console.log('je demande l\'avatar au serveur');
      axios.get(`${serverURI}/user/1/icon`)
        .then((response) => {
          console.log(response);
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
