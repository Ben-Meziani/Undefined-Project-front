import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const ToolsMenu = () => (
  <div className="toolsMenu">
    <ul className="toolsMenu-list">
      <li><Link to="/room/files"><Icon name="book" size="large" /></Link></li>
      <li><Link to="/room/notes"><Icon name="edit" size="large" /></Link></li>
      <li><Link to="/dices"><Icon name="bomb" size="large" /></Link></li>
      <li><Link to="/room/history"><Icon name="bomb" size="large" /></Link></li>
      <li><Link to="/room/share"><Icon disabled name="picture" size="large" /></Link></li>
    </ul>
  </div>
);

export default ToolsMenu;
