import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const MessageField = ({ sendMessage, inputValue, changeText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };
  const handleChange = (event) => {
    changeText(event.target.value);
  };

  return (
    <div>
      <form
        className="chatroom-form"
        onSubmit={handleSubmit}
      >
        <input
          className="chatroom-field"
          type="text"
          placeholder="Veuillez saisir un message..."
          onChange={handleChange}
          value={inputValue}
        />
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
  inputValue: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
};

export default MessageField;
