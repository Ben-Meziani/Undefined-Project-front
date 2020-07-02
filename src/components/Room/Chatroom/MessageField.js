import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import IconSend from '../../../assets/icons/message.svg';

const MessageField = ({ sendMessage, inputValue, changeTextChat }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };
  const handleChange = (event) => {
    changeTextChat(event.target.value);
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
          Send
        </button>
      </form>
    </div>
  );
};

MessageField.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeTextChat: PropTypes.func.isRequired,
};

export default MessageField;
