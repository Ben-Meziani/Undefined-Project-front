import axios from 'axios';

import { SEND_USER_DATA} from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_USER_DATA: {
      // ACCESS TO THE STATE TO GET THE USER ID
      const state = store.getState();
      const userId = state.user.id;
      console.log('++++ requête : j\'envoie les données modifiées au serveur ++++');
      // DEFINE THE TYPE OF DATA
      axios.post(`${serverURI}/user/${userId}/icon`, {
        email: state.user.email,
        password: state.user.password,
        pseudo: state.user.pseudo,
        icon: state.upload.iconFile,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
