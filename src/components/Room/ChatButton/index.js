import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const ChatButton = ({ chatOpen, toggleOpenChat }) => {
  console.log(chatOpen);
  return (
    <>
      {chatOpen ? (
        <button
          type="button"
          onClick={toggleOpenChat}
          className="chatroom-button--open"
        >
          x
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleOpenChat}
          className={chatOpen ? 'chatroom-button--open' : 'chatroom-button'}
        >
          +
        </button>
      )}
    </>
  );
};

ChatButton.propTypes = {
  chatOpen: PropTypes.bool.isRequired,
  toggleOpenChat: PropTypes.func.isRequired,
};

export default ChatButton;

