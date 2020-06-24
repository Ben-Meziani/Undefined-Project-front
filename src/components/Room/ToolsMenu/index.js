import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const ToolsMenu = () => (
  <div className="toolsMenu">
    <ul className="toolsMenu-list">
      <li><Link to="/room/sharedfiles"><Icon name="bomb" size="large" /></Link></li>
      <li><Link to="/room/playernotes"><Icon name="edit" size="large" /></Link></li>
      <li><Link to="/room/dices"><Icon name="book" size="large" /></Link></li>
      <li><Link to="/room/share"><Icon disabled name="picture" size="large" /></Link></li>
    </ul>
  </div>
);

export default ToolsMenu;
