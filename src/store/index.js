// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local

import room from '../middleware/room';
import upload from '../middleware/upload';
import auth from '../middleware/auth';
import user from '../middleware/user';

import rootReducer from '../reducers';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    auth,
    user,
    room,
    upload,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
