import axios from 'axios';

import {
  LOGIN,
  finishLoading,
  connect,
  CHECK,
} from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      // console.log('connecte-toi là!!');
      // axios.post(url[, data[, config]])
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // console.log('response', response.data);
          store.dispatch(connect());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // je veux dire que le chargement est fini
          store.dispatch(finishLoading());
        });
      next(action);
      break;
    }
    case CHECK:
      axios.post('http://localhost:3001/isLogged', {}, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.logged) {
            store.dispatch(connect());
          }
        });
      break;
    default:
      next(action);
  }
};

export default auth;
