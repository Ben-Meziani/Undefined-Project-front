/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Dice from '../../../assets/icons/dices.png';
import Book from '../../../assets/icons/magic-book.png';
import Notes from '../../../assets/icons/notepad.png';
import Chat from '../../../assets/icons/chat.png';

const DiceUrl = `https://undefined-project.tk/${Dice}`;
const BookUrl = `https://undefined-project.tk/${Book}`;
const NotesUrl = `https://undefined-project.tk/${Notes}`;
const ChatUrl = `https://undefined-project.tk/${Chat}`;

const ToolsMenu = ({
  toggleOpenBook,
  toggleOpenEdit,
  toggleOpenDice,
  toggleOpenChat,

}) => {
  return (
    <div className="toolsMenu">
      <ul className="toolsMenu-list">
        <button type="button" className="toolsMenu-button" onClick={toggleOpenBook}><img src={BookUrl} alt="book" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenEdit}><img src={NotesUrl} alt="write" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenDice}><img src={DiceUrl} alt="dice" /></button>
        <button type="button" className="toolsMenu-button" onClick={toggleOpenChat}><img src={ChatUrl} alt="message" /></button>
      </ul>
    </div>
  );
};

ToolsMenu.propTypes = {
  toggleOpenBook: PropTypes.func.isRequired,
  toggleOpenEdit: PropTypes.func.isRequired,
  toggleOpenDice: PropTypes.func.isRequired,
  toggleOpenChat: PropTypes.func.isRequired,
};

export default ToolsMenu;
