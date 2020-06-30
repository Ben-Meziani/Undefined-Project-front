import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import Vid from './Vid';
import PropTypes from 'prop-types';

import './style.scss';

const Video = ({ asmrPotter }) => {
// zut
  return (
    // Render a YouTube video player
    <div className="video">
      {asmrPotter.map((video) => (
        <Vid key={video.id} {...video} />
      ))}
      <Link to="/video/video1">Cliquer</Link>
    </div>
  );
};

Video.propTypes = {
  asmrPotter: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Video;
