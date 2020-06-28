// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from '../../containers/HomePage';
import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';
import Presentation from '../HomePage/Carousel/Presentation';
import Demonstration from '../HomePage/Carousel/Demonstration';
import Team from '../HomePage/Carousel/Team';

import ConnectedHome from '../../containers/ConnectedHome';
import EditProfile from '../../containers/ConnectedHome/EditProfile';

import RoomStatic from '../Room/RoomStatic';
import Chatroom from '../../containers/Room/Chatroom';
import DicesHistory from '../Room/Dices/DicesHistory';
import DicesThrow from '../../containers/Room/Dices/DicesThrow';
import PlayerNotes from '../Room/PlayerNotes';
import SharedFiles from '../Room/SharedFiles';
import SharedViewForm from '../Room/SharedView/SharedViewForm';
import PlayersList from '../../containers/Room/PlayersList';

// == Import
import './style.scss';

// == Composant
const App = ({ id }) => (
  <div className="app">
    <HomePage />
    
    <Switch>

{/*       <Route path="/" exact>
        <HomePage />
        <div className="homeDisplay">
          <div className="carousel-show">
            <Presentation />
          </div>
        </div>
      </Route>

      <Route path="/demonstration" exact>
        <HomePage />
        <div className="homeDisplay">
          <div className="carousel-show">
            <Demonstration />
          </div>
        </div>
      </Route>

      <Route path="/team" exact>
        <HomePage />
        <div className="homeDisplay">
          <div className="carousel-show">
            <Team />
          </div>
        </div>
      </Route>

      <Route path="/login" exact>
        <HomePage />
        <div className="homeDisplay">
          <Login />
        </div>
      </Route>

      <Route path="/register" exact>
        <HomePage />
        <div className="homeDisplay">
          <Register />
        </div>
      </Route> */}

      <Route path="/dashboard" exact>
        <ConnectedHome />
      </Route>

      <Route path={`/dashboard/user/${id}/edit`} exact>
        <EditProfile />
      </Route>

      <Route path="/room" exact>
        <RoomStatic />
        <div className="displayTools">
          <p>Utilisez le menu ci-dessus pour accéder à vos outils de jeu</p>
        </div>
      </Route>

      <Route path="/chatroom" exact>
        <RoomStatic />
        <div className="container">
          <div className="displayTools">
            <p>Utilisez le menu ci-dessus pour accéder à vos outils de jeu</p>
          </div>
          <Chatroom />
        </div>
      </Route>

      <Route path="/players-list" exact>
        <RoomStatic />
        <div className="container">
          <div className="displayTools">
            <PlayersList />
          </div>
          <Chatroom />
        </div>
      </Route>

      <Route path="/dices" exact>
        <RoomStatic />
        <div className="displayTools">
          <DicesThrow />
        </div>
      </Route>

      <Route path="/room/history" exact>
        <RoomStatic />
        <div className="displayTools">
          <DicesHistory />
        </div>
      </Route>

      <Route path="/room/notes" exact>
        <RoomStatic />
        <div className="displayTools">
          <PlayerNotes />
        </div>
      </Route>

      <Route path="/room/files" exact>
        <RoomStatic />
        <div className="displayTools">
          <SharedFiles />
        </div>
      </Route>

      <Route path="/room/share" exact>
        <RoomStatic />
        <div className="displayTools">
          <SharedViewForm />
        </div>
      </Route>
    </Switch>
  </div>
);

App.propTypes = {
  id: PropTypes.number.isRequired,
};

// == Export
export default App;
