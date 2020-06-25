import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const MessageField = ({ sendMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div>
      <form
        className="chatroom-form"
        onSubmit={handleSubmit}
      >
        <input className="chatroom-field" type="text" placeholder="Veuillez saisir un message..." />
        <button
          type="submit"
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
};

MessageField.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default MessageField;
