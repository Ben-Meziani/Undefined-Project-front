import React from 'react';
import { Route } from 'react-router-dom';
import Demonstration from './Demonstration';
import Presentation from './Presentation';
import Team from './Team';

import './style.scss';

const Carousel = () => (
  <>
    <div className="carousel-show">
      <Route
        path="/home/team"
        component={Team}
      />
      <Route
        exact
        path="/home"
        component={Presentation}
      />
      <Route
        path="/home/demonstration"
        component={Demonstration}
      />
    </div>
  </>
);

export default Carousel;
