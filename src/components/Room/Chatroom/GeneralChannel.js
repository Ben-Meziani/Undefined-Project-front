import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import ScrollToBottom from 'react-scroll-to-bottom';
import ChatMessage from './ChatMessage';
import './style.scss';

const GeneralChannel = ({ chatMessages }) => {
  const containerElement = useRef(null);
  useEffect(() => {
    const scrollY = containerElement.current.scrollHeight;
    containerElement.current.scrollTo(0, scrollY);
  }, [chatMessages]);

  return (
    <div ref={containerElement} className="messages">
      <ScrollToBottom>
        {chatMessages.map((chatMessage) => (
          <ChatMessage key={chatMessage.id} {...chatMessage} />
        ))}
      </ScrollToBottom>
    </div>
  );
};

GeneralChannel.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GeneralChannel;
