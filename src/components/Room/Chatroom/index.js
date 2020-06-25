import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GeneralChannel from '../../../containers/Room/Chatroom/GeneralChannel';
import MessageField from '../../../containers/Room/Chatroom/MessageField';

import './style.scss';

const Chatroom = ({ webSocketConnect, chatOpen, toggleOpenChat }) => {
  useEffect(webSocketConnect, []);
  return (
    <div className="chatroom">
      <button
        type="button"
        onClick={toggleOpenChat}
        className="chatroom-button"
      >
        +
      </button>
{/*       <GeneralChannel />
      <MessageField /> */}
    </div>
  );
};

Chatroom.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
  chatOpen: PropTypes.bool.isRequired,
  toggleOpenChat: PropTypes.func.isRequired,
};

export default Chatroom;

/* {chatOpen ? 'chatroom chatroom--open' : 'chatroom'} */
