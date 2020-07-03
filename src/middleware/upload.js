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
      const userIcon = state.user.icon;
      console.log('++++ je récupère l\'icon du user selon son id ++++');
      axios.get(`${serverURI}/user/${userId}/icon/${userIcon}`, {
      }, {
        withCredentials: true,
        /* responseType: 'blob', */
      })
        .then((response) => {
          const blob = new Blob([response.data]);
          const url = URL.createObjectURL(blob);
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
    default:
      next(action);
  }
};

export default user;
