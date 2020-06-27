import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DicesThrow = ({ values, displayResult }) => {
  const handleClick = () => {
    displayResult();
  };
  return (
    <div className="dices">
      <div className="dices-result">
        {values.value}
      </div>
      <button
        label="button"
        type="button"
        onClick={handleClick}
        className="dices-throw"
      >
        Throw it!
      </button>
    </div>
  );
};

DicesThrow.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    }),
  ).isRequired,
  displayResult: PropTypes.func.isRequired,
};

export default DicesThrow;
