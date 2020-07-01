/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import Media from 'src/components/Room/ShareMedia/Media';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const ShareMedia = ({ pictureOpen, toggleOpenShare, changeFileUrl, addFile, fileURL }) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    console.log(evt.target.files[0]);
    const newFileUrl = URL.createObjectURL(evt.target.files[0]);
    changeFileUrl(newFileUrl);
    addFile(newFileUrl);
  };
  return (
    <div
      className={!pictureOpen ? 'share-media-toggle share-media' : 'share-media'}
    >
      <button type="button" onClick={toggleOpenShare}><Icon name="close" size="large" /></button>
      <div className="share-media-list">
        <div className="share-media-files">
          <h1 className="share-media-files-title">Files</h1>
          <div className="share-media-files-item">
            <img className="avatar" src={fileURL} alt="unknown" />
            {/* INSERER FILES UPLOADES DANS ARRAY */}
            {/*  {files.map((file) => (
                <Media key={file.name} {...file} />
              ))} */}
          </div>
        </div>
        <div className="share-media-videos">
          <h1 className="share-media-videos-title">Vidéos</h1>
          <div className="share-media-videos-item" />
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <input type="file" name="mediaFile" className="media-choice-input" onChange={handleChange} />
    </div>
  );
};

ShareMedia.propTypes = {
  pictureOpen: PropTypes.bool.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  changeFileUrl: PropTypes.func.isRequired,
  addFile: PropTypes.func.isRequired,
  fileURL: PropTypes.string.isRequired,
/*   files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired, */

};

export default ShareMedia;
