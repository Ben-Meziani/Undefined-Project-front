// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from '../../containers/HomePage';
import ConnectedHome from '../../containers/ConnectedHome';
import EditProfile from '../../containers/ConnectedHome/EditProfile';
import Error404 from '../Error404';
import Room from '../Room';

// == Import
import './style.scss';

// == Composant
const App = ({ id, idForJoin, roomId }) => (
  <div className="app">
    <HomePage />
    <Switch>
      <Route path={`/dashboard/user/${id}`} exact>
        <ConnectedHome />
      </Route>

      <Route path={`/dashboard/user/${id}/edit`} exact>
        <EditProfile />
      </Route>

      <Route path={`/room/${idForJoin}/view`} exact>
        <Room />
      </Route>

      <Route path={`/room/${roomId}/view`} exact>
        <Room />
      </Route>
    </Switch>
  </div>
);

App.propTypes = {
  id: PropTypes.number.isRequired,
  idForJoin: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

// == Export
export default App;
