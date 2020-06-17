import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, placeholder, name, value }) => (
  <>
    <input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  </>
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};


export default Field;
