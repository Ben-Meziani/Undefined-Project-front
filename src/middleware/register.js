import axios from 'axios';
import { REGISTER, connect, finishLoading } from 'src/actions/user';

const register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      axios.post('http://ec2-54-234-79-207.compute-1.amazonaws.com/register', {
        email: state.registration.email,
        password: state.registration.password,
        passwordChecked: state.registration.passwordChecked,
        username: state.registration.username,
      })
        .then((response) => {
          console.log(response, response.data);
          store.dispatch(connect());
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
export default register;
