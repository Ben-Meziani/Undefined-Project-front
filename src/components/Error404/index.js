// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Error404 = () => (
  <div className="error-404">
    <div className="homePage-header-title">
      You're on the Diagon Alley ! What's the matter dude ?
    </div>
  </div>
);
// == Export
export default Error404;
