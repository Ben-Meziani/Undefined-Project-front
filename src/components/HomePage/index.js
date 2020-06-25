import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';
import ButtonsNav from './ButtonsNav';
import CarouselMenu from './Carousel/CarouselMenu';
import Carousel from './Carousel';
import './style.scss';

const HomePage = ({ logged, loading }) => (
  <div>
    <Header />
    <ButtonsNav />
    <CarouselMenu />
    <div className="homeDisplay">
      <Carousel />
      <Route path="/home/login">
        <Login />
      </Route>
      <Route path="/home/register">
        <Register />
      </Route>
    </div>
    {!logged && !loading ? <Redirect to="/home" /> : <Redirect to="/dashboard" />}
  </div>
);

HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default HomePage;
