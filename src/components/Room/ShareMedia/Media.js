/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Media = ({ file, id }) => {
  return (
    <div className="media-picture">
      {!(id === 0) ? (<img className="share-picture" src={file} alt="unknown" />) : ''}
    </div>
  );
};

Media.propTypes = {
  file: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Media;
