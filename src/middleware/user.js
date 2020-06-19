import axios from 'axios';

import { FETCH_USERDATAS, saveUser } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERDATAS:
      console.log('je lance ma requête');
      // this API is juste for test and will be replaced by another one
      axios.get('http://localhost:3001/api/users')
        .then(
          (response) => {
            const saveUserDatas = saveUser(response.data);
            console.log(response);
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

export default user;