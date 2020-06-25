import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';
import ButtonsNav from './ButtonsNav';
import CarouselMenu from './Carousel/CarouselMenu';
import Carousel from './Carousel';
import './style.scss';

const HomePage = ({ logged }) => {
console.log(logged);

  return (
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
      {logged ? <Redirect to="/dashboard" /> : <Redirect to="/home" />}
    </div>
  );
};

HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default HomePage;
