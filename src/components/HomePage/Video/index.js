import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';
import Vid from './Vid';

import './style.scss';

const Video = ({ asmrPotter, url, changeUrl }) => {
// zut
  const handleClick = () => {
    console.log();
    changeUrl();
  };
  return (
    // Render a YouTube video player
    <div className="video">
      <ul>
        {asmrPotter.map(({ id, author, value }) => (
          <button
            key={id}
            type="button"
            onClick={handleClick}
            name={value}
          >
            {author}
          </button>
        ))}
      </ul>
      {/* <Vid {...asmrPotter} /> */}
      <ReactPlayer url={url} />
    </div>
  );
};

Video.propTypes = {
  asmrPotter: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  url: PropTypes.string,
  changeUrl: PropTypes.func.isRequired,
};

Video.defaultProps = {
  url: '',
};

export default Video;
