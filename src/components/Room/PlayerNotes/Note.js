import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ content }) => (
  <div>
    <p>{content}</p>
  </div>
);

Note.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Note;
