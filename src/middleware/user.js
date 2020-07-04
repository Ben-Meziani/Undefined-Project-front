/* eslint-disable no-console */
import axios from 'axios';

import { SEND_USER_DATA } from '../actions';

const serverURI = 'https://undefined-project.tk/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_USER_DATA: {
      // ACCESS TO THE STATE TO GET THE USER ID
      const state = store.getState();
      const userId = state.user.id;
      const formData = new FormData();
      console.log('iconFile dans la requête sendUserData vaut', state.upload.iconFile);
      formData.append('icon', state.upload.iconFile);
      formData.append('email', state.user.email);
      formData.append('pseudo', state.user.pseudo);

      axios.post(
        `${serverURI}/user/${userId}/edit`,
        formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
      )
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
