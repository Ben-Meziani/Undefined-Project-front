// Tout ce qui concerne la connexion générale de l'utilisateur

import axios from 'axios';
// import jwt from 'jwt-decode';

import {
  LOGIN,
  LOGOUT,
  loading,
  REGISTER,
  connect,
  register,
} from '../actions';

const URI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
     /*  axios.post(`${URI}/login`, {
        email: state.user.email,
        password: state.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response', response.data);
          console.log(response);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(loading());
        }); */
      axios.post(`${URI}/login_check`, {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          console.log(response.status);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case REGISTER: {
      const state = store.getState();
      axios.post(`${URI}/register`, {
        email: state.user.email,
        password: state.user.password,
        pseudo: state.user.pseudo,
        created_at: '2020/06/19',
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response', response.data);
          if (response.data) {
            console.log(response);
            store.dispatch(register());
            store.dispatch(connect());
          };
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(loading());
        });
      axios.post(`${URI}/login_check`, {
        email: state.user.email,
        password: state.user.password,
      })
        .catch((response) => {
          console.log(response.status);
        });
      next(action);
      break;
    }
    case LOGOUT:
      console.log('je me déconnecte');
      axios.get(`${URI}/logout`, {
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
