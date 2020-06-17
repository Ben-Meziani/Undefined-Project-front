import axios from 'axios';

import { LOGIN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      console.log('connecte-toi là!!');
      // axios.post(url[, data[, config]])
      axios.post('http://localhost:3001/login', {
        email: state.email,
        password: state.password,
      })
        .then((response) => {
          console.log('response', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth;
