import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, placeholder, name, value, changeValue }) => (
  <>
    <input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(event) => {
        changeValue(event.target.value);
      }}
    />
  </>
);

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
};


export default Field;

