import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
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
      <Route path="/home/login">
        <Login />
      </Route>
      <Route path="/home/register">
        <Register />
      </Route>
    </div>
  </div>
);

export default HomePage;
