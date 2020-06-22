import axios from 'axios';
// import jwt from 'jwt-decode';

import {
  LOGIN_REQUEST,
  finishLoading,
  connectUser,
  CHECK_CONNEXION,
  changeValue,
  authSuccess,
} from 'src/actions';

const URI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com';

const connexionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const state = store.getState();
      axios.post(`${URI}/login`, {
        email: state.connexion.email,
        password: state.connexion.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response', response.data);
          const { token } = response.data;
          console.log(token);
          //const user = jwt(token);
          // console.log(user);
/*           localStorage.setItem('token', token);
          const actionToSaveToken = changeValue('token', response.data.token);
          store.dispatch(actionToSaveToken);
          store.dispatch(authSuccess(token, user)); */
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
    default:
      next(action);
  }
};

export default connexionMiddleware;
