/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

import Dice from '../../../assets/icons/dice.svg';
import Book from '../../../assets/icons/magic.svg';
import Notes from '../../../assets/icons/contract.svg';
import Pictures from '../../../assets/icons/picture.svg';
import Chat from '../../../assets/icons/rating.svg';

const ToolsMenu = ({
  toggleOpenBook,
  toggleOpenEdit,
  toggleOpenDice,
 /*  pictureOpen, */
  masterRole,
  toggleOpenPicture,
  pictureOpen,
  toggleOpenChat,

}) => {
  return (
    <div className="toolsMenu">
      {!masterRole && (
      <ul className="toolsMenu-list">
        <button type="button" className="toolsMenu-button" onClick={toggleOpenBook}><img src={Book} alt="book" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenEdit}><img src={Notes} alt="write" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenDice}><img src={Dice} alt="dice" /></button>
      </ul>
      )}
      {masterRole && (
      <ul className="toolsMenu-list">
        <button type="button" className="toolsMenu-button" onClick={toggleOpenBook}><img src={Book} alt="book" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenEdit}><img src={Notes} alt="write" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenDice}><img src={Dice} alt="dice" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenChat}><img src={Chat} alt="message" /></button>
      </ul>
    </div>
  );
};

ToolsMenu.propTypes = {
  toggleOpenBook: PropTypes.func.isRequired,
  toggleOpenEdit: PropTypes.func.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
  toggleOpenChat: PropTypes.func.isRequired,
/*   pictureOpen: PropTypes.bool.isRequired, */
  masterRole: PropTypes.bool.isRequired,
  toggleOpenPicture: PropTypes.func.isRequired,
  pictureOpen: PropTypes.bool.isRequired,

};

export default ToolsMenu;
