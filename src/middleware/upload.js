/* eslint-disable prefer-template */
/* eslint-disable no-console */
import axios from 'axios';

import { SEND_EDITED_DATAS } from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EDITED_DATAS: {
      // ACCESS TO THE STATE TO GET THE USER ID
      const state = store.getState();
      const userId = state.user.id;
      console.log('++++ iconFile dans le middleware upload ++++' + state.upload.iconFile);
      console.log('++++ requête : j\'envoie les données modifiées au serveur ++++');
      // DEFINE THE TYPE OF DATA
      /* const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }; */

      axios.post(`${serverURI}/user/${userId}/icon`, {
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
