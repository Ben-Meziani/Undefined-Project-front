/* eslint-disable no-console */
// Tout ce qui concerne la connexion générale de l'utilisateur

import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  loading,
  REGISTER,
  connect,
  register,
  saveUser,
} from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      // CHECK THE TOKEN AND GET COOKIE ON LOGIN

      axios.post(`${serverURI}/login_check`, {
        email: state.user.currentEmail,
        password: state.user.currentPassword,
      })
        .then((response) => {
          const saveCurrentUser = saveUser(response.data);
          store.dispatch(saveCurrentUser);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    // SEND NEW USER'S DATA

    case REGISTER: {
      const state = store.getState();
      axios.post(`${serverURI}/register`, {
        email: state.user.regEmail,
        password: state.user.regPassword,
        pseudo: state.user.regPseudo,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data) {
            console.log(response);
            store.dispatch(register());
            store.dispatch(connect());
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(loading());
        });
      // REQUETE NECESSAIRE ?
      axios.post(`${serverURI}/login_check`, {
        email: state.user.email,
        password: state.user.password,
      })
        .catch((response) => {
          console.log(response.status);
        });
      next(action);
      break;
    }

    // DECONNECT A USER

    case LOGOUT:
      console.log('je me déconnecte');
      axios.get(`${serverURI}/logout`, {
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
