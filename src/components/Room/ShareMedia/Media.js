/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Media = ({
  file,
  id,
  fileURL,
  idForJoin,
}) => {
  console.log('COMPONENT MEDIA fileURL vaut', fileURL);
  console.log('COMPONENT MEDIA file vaut', file);
  console.log('COMPONENT MEDIA idForJoin vaut', idForJoin);
  return (
    <div className="media-picture">
   {/*    {fileURL !== file && !(id === 0) ? (<Link to={`/room/${idForJoin}/view/shareview`}><img className="share-picture" src={file} alt="unknown" /></Link>) : <Link to={`/room/${idForJoin}/view/shareview`}><img className="image" src={fileURL} alt="unknown" /></Link>} */}
      {fileURL !== file && !(id === 0) ? (<Link to="/room/view/shareview"><img className="share-picture" src={file} alt="unknown" /></Link>) : <Link to="/room/view/shareview"><img className="image" src={fileURL} alt="unknown" /></Link>}
    </div>
  );
};

Media.propTypes = {
  file: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  fileURL: PropTypes.string.isRequired,
  idForJoin: PropTypes.string.isRequired,
};

export default Media;
