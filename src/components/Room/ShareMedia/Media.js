/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Media = ({ fileURL }) => {
  return (
    <div className="media-blob">
      <img className="avatar" src={blob} alt="unknown" />
    </div>
  );
};

Media.propTypes = {
  blob: PropTypes.string.isRequired,
};

export default Media;
