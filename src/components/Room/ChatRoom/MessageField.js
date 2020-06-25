import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const MessageField = () => (
  <div>
    <form className="chatroom-form">
      <input className="chatroom-field" type="text" placeholder="Veuillez saisir un message..." />
      <button
        type="button"
        className="chatroom-send"
      >
        <Icon
          name="send"
          size="large"
        />
      </button>
    </form>
  </div>
);

export default MessageField;
