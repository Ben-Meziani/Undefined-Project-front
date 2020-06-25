import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ChatMessage = ({ author, content }) => (

  <div className="message">
    <div className="message-author">{author}</div>
    <p className="message-content">{content}</p>
  </div>
);

ChatMessage.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ChatMessage;
