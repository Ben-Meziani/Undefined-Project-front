// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import auth from '../middleware/auth';
import user from '../middleware/user';
/* import room from '../middleware/room'; */
/* import socket from '../middleware/socket'; */
import upload from '../middleware/upload';
/* import dices from '../middleware/dices'; */

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    auth,
    user,
    /* room, */
    upload,
    /* dices, */
    /*  socket, */
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
