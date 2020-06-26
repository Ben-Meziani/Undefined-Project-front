import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import ScrollToBottom from 'react-scroll-to-bottom';
import ChatMessage from './ChatMessage';
import './style.scss';

/* DOC scroll-to-bottom auto
https://github.com/compulim/react-scroll-to-bottom
https://www.npmjs.com/package/react-scroll-to-bottom */

const GeneralChannel = ({ chatMessages }) => {
  const ROOT_CSS = css({
    height: 600,
  });

  return (
    <div className="messages">
      <ScrollToBottom className={ROOT_CSS}>
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
