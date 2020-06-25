import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ChatMessage = ({ author, text }) => (

  <div className="message">
    <div className="message-author">{author}</div>
    <p className="message-content">{text}</p>
  </div>
);

ChatMessage.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChatMessage;
