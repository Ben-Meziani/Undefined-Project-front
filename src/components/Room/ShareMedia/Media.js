/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Media = ({ file, id, fileURL }) => {
  return (
    <div className="media-picture">
      {!fileURL && !(id === 0) ? (<img className="share-picture" src={file} alt="unknown" />) : <img className="image" src={fileURL} alt="unknown" />}
    </div>
  );
};

Media.propTypes = {
  file: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  fileURL: PropTypes.string.isRequired,
};

export default Media;
