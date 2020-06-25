import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import './style.scss';

const GeneralChannel = ({ chatMessages }) => (
  <div className="messages">
    {chatMessages.map((message) => (
      <ChatMessage key={message.id} {...message} />
    ))}
  </div>
);

GeneralChannel.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({ }),
  ).isRequired,
};

export default GeneralChannel;
