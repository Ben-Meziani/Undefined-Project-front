import axios from 'axios';

import {
  LOGIN,
  finishLoading,
  connect,
  LOGOUT,
} from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('adresse serv : ec2-54-234-79-207.compute-1.amazonaws.com/login', {
        email: state.user.email,
        password: state.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // console.log('response', response.data);
          if (response.data.logged) {
            store.dispatch(connect());
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    case LOGOUT:
      axios.post('adresse serv : ec2-54-234-79-207.compute-1.amazonaws.com/logout', {}, {
        withCredentials: true,
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
