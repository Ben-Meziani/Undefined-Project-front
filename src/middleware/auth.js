/* eslint-disable no-console */
// Tout ce qui concerne la connexion générale de l'utilisateur

import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  REGISTER,
  loading,
  connect,
  saveUser,
  CHECK,
} from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      // CHECK THE TOKEN AND GET COOKIE ON LOGIN

      axios.post(`${serverURI}/login_check`, {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          console.log(response);
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
            const saveUserDatas = saveUser(response.data);
            store.dispatch(saveUserDatas);
            // mettre une condition pour gérer le loading
            store.dispatch(connect());
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(loading());
        });
      next(action);
      break;
    }

    /* case CHECK: {
      axios.post(`${serverURI}/login_check`, {}, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
          // dans response.data on me dit si oui ou non je suis connecté AVEC RESPONSE 200
          if (response.data) {
            if (response.status === '200') {
              console.log('réponse ok');
              store.dispatch(connect());
            }
            else {
            // gérer messages d'erreur
            }
          }
        });
      next(action);
      break;
    } */

    // DECONNECT A USER
    case LOGOUT:
      console.log('je me déconnecte');
      axios.get(`${serverURI}/logout`, {
        withCredentials: true,
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
