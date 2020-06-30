import React from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

import './style.scss';

const Video = ({ content, author }) => {
// zut
  return (
    // Render a YouTube video player
    <div className="video">
      <ReactPlayer url={content} />
      <ul>
        <li>{author}</li>
      </ul>
    </div>
  );
};

Video.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Video;
