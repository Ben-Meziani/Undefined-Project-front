import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import './style.scss';

const GeneralChannel = ({ chatMessages }) => (
  <div className="messages">
    {chatMessages.map((chatMessage) => (
      <ChatMessage key={chatMessage.id} {...chatMessage} />
    ))}
  </div>
);

GeneralChannel.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GeneralChannel;
