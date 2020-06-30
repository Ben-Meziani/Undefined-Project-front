import React from 'react';
import { Icon } from 'semantic-ui-react';

import Chevron from '../../../assets/icons/chevron.svg';
import './style.scss';

const ToggleMenu = () => (
  <div className="toggle-menu">
    <img src={Chevron} alt="book" />
  </div>
);

export default ToggleMenu;
