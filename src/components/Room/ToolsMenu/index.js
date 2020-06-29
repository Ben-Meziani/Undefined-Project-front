/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import './style.scss';

const ToolsMenu = ({
  toggleOpenBook,
  toggleOpenEdit,
  toggleOpenDice,
  toggleOpenPicture,
  pictureOpen,
}) => {
  return (
    <div className="toolsMenu">
      <ul className="toolsMenu-list">
        <button type="button" className="toolsMenu-button" onClick={toggleOpenBook}><Icon name="book" size="large" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenEdit}><Icon name="edit" size="large" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenDice}><Icon name="bomb" size="large" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenPicture}><Icon name="picture" size="large" /></button>
      </ul>
    </div>
  );
};

ToolsMenu.propTypes = {
  toggleOpenBook: PropTypes.func.isRequired,
  toggleOpenEdit: PropTypes.func.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
  toggleOpenPicture: PropTypes.func.isRequired,
  pictureOpen: PropTypes.bool.isRequired,
};

export default ToolsMenu;
