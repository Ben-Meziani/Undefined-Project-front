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
        path="/team"
        component={Team}
      />
      <Route
        path="/"
        exact
        component={Presentation}
      />
      <Route
        path="/demonstration"
        component={Demonstration}
      />
    </div>
  </>
);

export default Carousel;
