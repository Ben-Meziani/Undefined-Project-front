import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GeneralChannel from '../../../containers/Room/Chatroom/GeneralChannel';
import MessageField from '../../../containers/Room/Chatroom/MessageField';

import './style.scss';

const Chatroom = ({ webSocketConnect, chatOpen }) => {
  useEffect(webSocketConnect, []);
  return (
    <>
      <div className={chatOpen ? 'chatroom chatroom--open' : 'chatroom'}>
        <GeneralChannel />
        <MessageField />
      </div>
    </>
  );
};

Chatroom.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
  chatOpen: PropTypes.bool.isRequired,
};

export default Chatroom;

