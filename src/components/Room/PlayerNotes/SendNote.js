import React from 'react';
import PropTypes from 'prop-types';

const SendNote = ({ sendNote, changeTextNote, inputValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendNote();
  };
  const handleChange = (event) => {
    changeTextNote(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} className="form-input" value={inputValue} type="text" placeholder="Veuillez saisir un message..." />
      <button className="form-button" type="submit">&gt;</button>
    </form>
  );
};

export default SendNote;
SendNote.propTypes = {
  sendNote: PropTypes.func.isRequired,
  changeTextNote: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
