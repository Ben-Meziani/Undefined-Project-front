import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  placeholder,
  name,
  value,
  changeValue,
}) => {
  const handleChange = (evt) => {
    changeValue(evt.target.value, name);
  };

  return (
    <div className="homePage-Field">
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

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
  value: '',
};

export default Field;
