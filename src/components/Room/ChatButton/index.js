import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const ChatButton = ({ chatOpen, toggleOpenChat }) => {
  return (
    <>
      {chatOpen ? (
        <Link to="/chatroom">
          <button
            type="button"
            onClick={toggleOpenChat}
            className="chatroom-button--open"
          >
            x
          </button>
        </Link>
      ) : (
        <Link to="/chatroom">
          <button
            type="button"
            onClick={toggleOpenChat}
            className={chatOpen ? 'chatroom-button--open' : 'chatroom-button'}
          >
            +
          </button>
        </Link>
      )}
    </>
  );
};

ChatButton.propTypes = {
  chatOpen: PropTypes.bool.isRequired,
  toggleOpenChat: PropTypes.func.isRequired,
};

export default ChatButton;

