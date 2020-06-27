import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Login from '../../containers/HomePage/Login';
import Register from '../../containers/HomePage/Register';
import ButtonsNav from './ButtonsNav';
import CarouselMenu from './Carousel/CarouselMenu';
import './style.scss';

const HomePage = ({ logged }) => {
console.log(logged);

  return (
    <div>
      <Header />
      <ButtonsNav />
      <CarouselMenu />
{/*       {logged ? <Redirect to="/dashboard" /> : <Redirect to="/" />} */}
    </div>
  );
};

HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
};

HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default HomePage;
