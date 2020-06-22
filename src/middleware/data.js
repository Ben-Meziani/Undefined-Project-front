import axios from 'axios';

import { FETCH_USERDATAS, saveUser } from '../actions/user';

const data = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERDATAS:
      console.log('je lance ma requête pour récupérer les infos des users');
      axios.get('http://localhost:3001/api/users')
        .then(
          (response) => {
            const saveUserDatas = saveUser(response.data);
            console.log(response.data);
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

export default data;