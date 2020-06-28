import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const ToolsMenu = ({ toggleOpenBook }) => {
  return (
    <div className="toolsMenu">
      <ul className="toolsMenu-list">
        <button type="button" onClick={toggleOpenBook}>Book</button>
        <li><Icon onClick={toggleOpenBook} name="book" size="large" /></li>
        <li><Icon name="edit" size="large" /></li>
        <li><Icon name="bomb" size="large" /></li>
        <li><Icon name="bomb" size="large" /></li>
        <li><Icon disabled name="picture" size="large" /></li>
      </ul>
    </div>
  );
};

ToolsMenu.propTypes = {
  toogleOpenBook: PropTypes.func.isRequired,
};

export default ToolsMenu;
