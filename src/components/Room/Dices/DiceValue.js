import React from 'react';

import PropTypes from 'prop-types';

const DiceValue = ({ value }) => (
  <>
    <p>{value}</p>
  </>
);

DiceValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default DiceValue;
