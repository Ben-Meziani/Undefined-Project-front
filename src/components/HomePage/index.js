import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';
import ButtonsNav from './ButtonsNav';
import Presentation from '../HomePage/Carousel/Presentation';
import Rain from '../HomePage/RaindropAnimation';
/* import Demonstration from '../HomePage/Carousel/Demonstration';
import CarouselMenu from './Carousel/CarouselMenu';
import Team from '../HomePage/Carousel/Team'; */
import './style.scss';

const HomePage = ({ logged }) => {
console.log(logged);

  return (
    <Switch>

      <Route path="/" exact>
        <div className="homePage">
          <Header />
          <div className="homePage-container">
            <div className="homePage-buttons">
              <ButtonsNav />
            </div>
            <div>
              {/* <CarouselMenu /> */}
              <div className="homePage-display">
                <Presentation />
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route path="/login" exact>
        <div className="homePage">
          <Header />
          <div className="homePage-container">
            <div className="homePage-buttons">
              <ButtonsNav />
            </div>
            <div>
              {/* <CarouselMenu /> */}
              <div className="homePage-display">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </Route>

      <Route path="/register" exact>
        <div className="homePage">
          <Header />
          <div className="homePage-container">
            <div className="homePage-buttons">
              <ButtonsNav />
            </div>
            <div>
              {/* <CarouselMenu /> */}
              <div className="homePage-display">
                <Register />
              </div>
            </div>
          </div>
        </div>
      </Route>
{/*       <Route path="/team" exact>
        <div className="homePage">
          <Header />
          <div className="homePage-container">
            <div className="homePage-buttons">
              <ButtonsNav />
            </div>
            <div>
              {<CarouselMenu />}
              <div className="homePage-display">
                <Team />
              </div>
            </div>
          </div>
        </div>
      </Route> */}

{/*       <Route path="/demonstration" exact>
        <div className="homePage">
          <Header />
          <div className="homePage-container">
            <div className="homePage-buttons">
              <ButtonsNav />
            </div>
            <div>
              <CarouselMenu />
              <div className="homePage-display">
                <Demonstration />
              </div>
            </div>
          </div>
        </div>
      </Route> */}

    </Switch>
  );
};

{/*       {logged ? <Redirect to="/dashboard" /> : <Redirect to="/" />} */}

/* HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
};

HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
}; */

export default HomePage;
