// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import registrationMiddleware from '../middleware/registrationMiddleware';
import connexionMiddleware from '../middleware/connexionMiddleware';
import auth from '../middleware/auth';
import user from '../middleware/user';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    registrationMiddleware,
    connexionMiddleware,
    auth,
    user,
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
