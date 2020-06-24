import React from 'react';
import ChatMessage from './ChatMessage';
import './style.scss';

const GeneralChannel = () => (
  <div className="message">
    <ChatMessage />
    <ChatMessage />
    <ChatMessage />
  </div>
);

export default GeneralChannel;
