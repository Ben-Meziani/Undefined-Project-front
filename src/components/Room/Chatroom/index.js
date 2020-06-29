import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import GeneralChannel from '../../../containers/Room/Chatroom/GeneralChannel';
import MessageField from '../../../containers/Room/Chatroom/MessageField';

import './style.scss';

const Chatroom = ({ webSocketConnect, chatOpen, toggleOpenChat }) => {
  useEffect(webSocketConnect, []);
  return (
    <>
      <div className={chatOpen ? 'chatroom chatroom--open' : 'chatroom'}>
        <button className="close-button" type="button" onClick={toggleOpenChat}><Icon name="close" size="large" /></button>
        <GeneralChannel />
        <MessageField />
      </div>
    </>
  );
};

Chatroom.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
  chatOpen: PropTypes.bool.isRequired,
  toggleOpenChat: PropTypes.func.isRequired,
};

export default Chatroom;

