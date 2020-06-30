import React from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

import './style.scss';

const Video = ({ content }) => {
// zut
  return (
    // Render a YouTube video player
    <div className="video">
      <ReactPlayer url={content} />
    </div>
  );
};

Video.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Video;
