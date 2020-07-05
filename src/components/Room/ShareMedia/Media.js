/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Media = ({ file, id, fileURL, roomId }) => {
  console.log('COMPONENT MEDIA fileURL vaut', fileURL);
  console.log('COMPONENT MEDIA file vaut', file);
  return (
    <div className="media-picture">
      {!fileURL && !(id === 0) ? (<Link to={`/room/${roomId}/view/shareview`}><img className="share-picture" src={file} alt="unknown" /></Link>) : <img className="image" src={fileURL} alt="unknown" />}
    </div>
  );
};

Media.propTypes = {
  file: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  fileURL: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

export default Media;
