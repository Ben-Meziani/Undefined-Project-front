/* eslint-disable no-console */
// Tout ce qui concerne la connexion générale de l'utilisateur

import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SEND_EMAIL,
  loading,
  connect,
  saveUser,
  errorLog,
  errorRegPassword,
  sendEmail,
} from '../actions';

/* const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api'; */
const serverURI = 'https://undefined-project.tk/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      // CHECK THE TOKEN AND GET COOKIE ON LOGIN

      axios.post(`${serverURI}/login_check`, {
        email: state.user.email,
        password: state.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
          const saveCurrentUser = saveUser(response.data);
          store.dispatch(saveCurrentUser);
          store.dispatch(connect());
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(errorLog());
          }
        })
        .finally(() => {
          // loading is done
          store.dispatch(loading());
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
      })
        .then((response) => {
          if (response.data) {
            console.log(response);
            const saveUserDatas = saveUser(response.data);
            store.dispatch(saveUserDatas);
            store.dispatch(connect());
          }
        })
        .catch((error) => {
          // console.error(error);
          if (error.status !== 200) {
            store.dispatch(errorRegPassword());
          }
        })
        .finally(() => {
          // loading is over.
          store.dispatch(loading());
        });
      next(action);
      break;
    }

    // FORGOTTEN PASSWORD

    case SEND_EMAIL: {
      const state = store.getState();
      axios.post(`${serverURI}/forgotten-pass`, {
        email: state.user.sendedEmail,
      })
        .then((response) => {
          if (response.data) {
            console.log(response);
          }
        })
        .catch((error) => {
          console.error(error);
          if (error.status !== 200) {
            store.dispatch(errorRegPassword());
          }
        })
        .finally(() => {
          // loading is over.
          store.dispatch(loading());
        });
      next(action);
      break;
    }

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
