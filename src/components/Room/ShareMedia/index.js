/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const ShareMedia = ({ pictureOpen, toggleOpenShare }) => {
  return (
    <div
      className={!pictureOpen ? 'share-media-toggle share-media' : 'share-media'}
    >
      <button type="button" onClick={toggleOpenShare}><Icon name="close" size="large" /></button>
      <div className="player-notes-notes">
        <p className="player-notes-title">Player Notes</p>
      </div>
      <input type="text" placeholder="Write your notes here..." />
    </div>
  );
};

ShareMedia.propTypes = {
  pictureOpen: PropTypes.bool.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
};

export default ShareMedia;
