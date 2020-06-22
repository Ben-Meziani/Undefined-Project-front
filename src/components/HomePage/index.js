import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'src/components/HomePage/Header';
import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import ButtonsNav from './ButtonsNav';
import CarouselMenu from './Carousel/CarouselMenu';
import Carousel from './Carousel';
import './style.scss';

const HomePage = () => (
  <div>
    <Header />
    <ButtonsNav />
    <CarouselMenu />
    <div className="homeDisplay">
      <Carousel />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/register"
        component={Register}
      />
    </div>
  </div>
);

export default HomePage;
