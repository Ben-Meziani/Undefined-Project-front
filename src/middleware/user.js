import axios from 'axios';

import {} from '../actions';


const user = (store) => (next) => (action) => {
  switch (action.type) { 
    default:
      next(action);
  }
};

export default user;
