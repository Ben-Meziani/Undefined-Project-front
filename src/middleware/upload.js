import axios from 'axios';

import { SEND_EDITED_DATAS, SEND_AVATAR_TO_PREVIEW } from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EDITED_DATAS: {
      const state = store.getState();
      const userId = state.user.id;
      console.log(state.upload);
      console.log('j\'envoie les données modifiées au serveur');
      const config = {
        headers: {'content-type': 'multipart/form-data'}};
      axios.post(`${serverURI}/user/${userId}/edit`, {
        email: state.user.email,
        password: state.user.password,
        pseudo: state.user.pseudo,
        icon: state.user.icon,
      }, config)
        .then((response) => {
          console.log(response);
        });
      if (state.upload.iconFile) 
      {axios.post(`${serverURI}/user/${userId}/edit`, {
        email: state.user.email,
        password: state.user.password,
        pseudo: state.user.pseudo,
      })
        .then((response) => {
          console.log(response);
        }),
      }
      next(action);
      break;
    }
    case SEND_AVATAR_TO_PREVIEW: {
      const state = store.getState();
      const userId = state.user.id;
      const imageFile = new FormData();
      imageFile.append('icon', state.upload.iconFile);
      console.log(state.upload.iconFile);
      console.log('j\'envoie l\'iconFile au serveur ' + state.user.iconFile);
      axios.post(`${serverURI}/user/${userId}/icon`, {
        icon: imageFile,
      }, {
        withCredentials: true,
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
