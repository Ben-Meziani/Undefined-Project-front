import axios from 'axios';
import {
  REGISTER_REQUEST,
  finishLoading,
  registeredUser,
} from 'src/actions';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      const state = store.getState();
      axios.post('http://ec2-54-234-79-207.compute-1.amazonaws.com/register', {
        email: state.register.email,
        password: state.register.password,
        pseudo: state.register.pseudo,
        created_at: '2020/06/19',
      })
        .then((response) => {
          console.log('response', response.data);
          if (response.data) {
            console.log(response);
            store.dispatch(registeredUser());
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
    default:
      next(action);
  }
};

export default registrationMiddleware;
