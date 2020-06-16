// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/reducers';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
