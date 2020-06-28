/* eslint-disable prefer-template */
/* eslint-disable no-console */
import axios from 'axios';

import { SEND_ICON, FETCH_ICON, saveIcon } from '../actions';

const serverURI = 'https://undefined-project.tk/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ICON: {
      const state = store.getState();
      const userId = state.user.id;
      console.log('++++ je récupère l\'icon du user selon son id ++++');
      axios.get(`${serverURI}/user/${userId}/icon`, {
      }, {
        withCredentials: true,
        /* responseType: 'blob', */
      })
        .then((response) => {
          /* const url = window.URL.createObjectURL(new Blob([response.data])); */
          const blob = new Blob([response.data]);
          const url = URL.createObjectURL(blob);
          /* const reader = new FileReader();
          const url = reader.readAsDataURL(blob);
          console.log('--- reader result vaut --- ' + reader.result); */
          console.log('--- url vaut --- ' + url);
          const saveCurrentIcon = saveIcon(url);
          store.dispatch(saveCurrentIcon);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SEND_ICON: {
      // ACCESS TO THE STATE TO GET THE USER ID
      const state = store.getState();
      const userId = state.user.id;
      console.log('++++ iconFile dans le middleware upload ++++' + state.upload.iconFile);
      console.log('++++ requête : j\'envoie les données modifiées au serveur ++++');
      // DEFINE THE TYPE OF DATA
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
