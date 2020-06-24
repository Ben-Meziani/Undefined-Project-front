import React from 'react';
import './style.scss';

const ChatMessage = () => (

  <div className="message">
    <div className="message-author">{author}</div>
    <p className="message-content">{text}</p>
  </div>
);

export default ChatMessage;
