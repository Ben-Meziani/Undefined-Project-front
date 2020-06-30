import React from 'react';
import PropTypes from 'prop-types';
import Vid from './Vid';

import './style.scss';

const Video = ({ asmrPotter }) => {
// zut
  return (
    // Render a YouTube video player
    <div className="video">
      <ul>
        {asmrPotter.map(({ id, author }) => (
          <li
            key={id}
          >
            {author}
          </li>
        ))}
      </ul>
      <Vid {...asmrPotter} />
    </div>
  );
};

Video.propTypes = {
  asmrPotter: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Video;
