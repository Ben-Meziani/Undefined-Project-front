import axios from 'axios';

import { } from '../actions';

const serverURI = 'http://ec2-54-234-79-207.compute-1.amazonaws.com/api';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default user;
