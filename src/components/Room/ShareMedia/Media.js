/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Media = ({ file, id, image }) => {
  return (
    <div className="media-picture">
      {!image && !(id === 0) ? (<img className="share-picture" src={file} alt="unknown" />) : <img className="image" src={`https://undefined-project.tk/api/uploads/image/${image}`} alt="unknown" />}
    </div>
  );
};

Media.propTypes = {
  file: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Media;
