import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

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

export default HomePage;
