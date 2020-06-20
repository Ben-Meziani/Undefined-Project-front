/* import axios from 'axios';

import { FETCH_USERDATAS, saveUser } from '../actions/user';

const data = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERDATAS:
      console.log('je lance ma requête');
      axios.get('http://ec2-54-234-79-207.compute-1.amazonaws.com/users')
        .then(
          (response) => {
            const saveUserDatas = saveUser(response.data);
            console.log(saveUserDatas);
            store.dispatch(saveUserDatas);
          },
        )
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
      break;
    default:
      next(action);
  }
};

export default data; */