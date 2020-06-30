import React from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

import './style.scss';

const Vid = ({ content, id }) => {
// zut
  return (
    // Render a YouTube video player
    <div className="video">
      <ReactPlayer key={id} url={content} />
    </div>
  );
};

Vid.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Vid;
