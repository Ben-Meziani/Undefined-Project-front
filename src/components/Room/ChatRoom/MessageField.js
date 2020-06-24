import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './style.scss';

const MessageField = () => (
  <div>
    <form className="form">
      <input className="form-input" type="text" placeholder="Veuillez saisir un message..." />
      <button
        type="button"
        className="form-button"
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
