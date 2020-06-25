import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GeneralChannel from '../../../containers/Room/Chatroom/GeneralChannel';
import MessageField from '../../../containers/Room/Chatroom/MessageField';

import './style.scss';

const Chatroom = ({ webSocketConnect }) => {
  useEffect(webSocketConnect, []);
  return (
    <div className="chatroom">
      <GeneralChannel />
      <MessageField />
    </div>
  );
};

Chatroom.propTypes = {
  webSocketConnect: PropTypes.func.isRequired,
};

export default Chatroom;
