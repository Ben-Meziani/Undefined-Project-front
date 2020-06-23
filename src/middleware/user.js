import axios from 'axios';

import { SEND_AVATAR } from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_AVATAR: {
      const state = store.getState();
      console.log('j\'envoie un avatar au serveur');
      axios.get(`${serverURI}/room/upload`, {
        icon: state.user.avatarImg,
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
