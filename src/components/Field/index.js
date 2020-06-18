import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};


Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};


export default Field;
