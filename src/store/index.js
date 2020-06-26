// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import auth from 'src/middleware/auth';
import user from 'src/middleware/user';
import room from 'src/middleware/room';
import socket from 'src/middleware/socket';
import dices from 'src/middleware/dices';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    auth,
    user,
    room,
    socket,
    dices,
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
