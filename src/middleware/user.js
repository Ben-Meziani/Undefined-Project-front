import axios from 'axios';

import { SEND_EDITED_DATAS } from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EDITED_DATAS: {
      const state = store.getState();
      const userId = state.id;
      console.log(userId);
      console.log(state);
      console.log('j\'envoie l\'avatar au serveur');
      axios.post(`${serverURI}/user/1/icon`, {
        icon: state.user.icon,
      })
        .then((response) => {
          console.log(response);
        });
      axios.post(`${serverURI}/user/1/edit`, {
        email: state.user.email,
        password: state.user.password,
        pseudo: state.user.pseudo,
      })
        .then((response) => {
          console.log(response);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
