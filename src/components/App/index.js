// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Room from 'src/components/Room';
import HomePage from '../../containers/HomePage';
import ConnectedHome from '../../containers/ConnectedHome';

import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';

import Presentation from '../HomePage/Carousel/Presentation';
import Demonstration from '../HomePage/Carousel/Demonstration';
import Team from '../HomePage/Carousel/Team';

// == Import
import './style.scss';

// == Composant
const App = () => (
/*   useEffect(checkIsLogged, []); */
  <div className="app">
    <Switch>

      <Route path="/" exact>
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
      </Route>


      <Route path="/dashboard" exact>
        <ConnectedHome />
      </Route>

      <Route path="/room" exact>
        <Room />
      </Route>

    </Switch>
  </div>
);

/*
App.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
}; */

// == Export
export default App;
