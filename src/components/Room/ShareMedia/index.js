/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Media from 'src/components/Room/ShareMedia/Media';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const ShareMedia = ({ pictureOpen, toggleOpenShare, changeFileUrl, addFile, files, fileURL, sendImage }) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    console.log(evt.target.files[0]);
    const newFileUrl = URL.createObjectURL(evt.target.files[0]);
    changeFileUrl(newFileUrl);
    addFile(fileURL);
    console.log('je veux envoyer l\'image au serveur');
    sendImage();
  };
  console.log('fileURL dans component ShareMedia vaut', fileURL);
  console.log('pictureOpen vaut', pictureOpen);
  return (
    <div className={!pictureOpen ? 'share-media-toggle share-media' : 'share-media'}>
      <button type="button" onClick={toggleOpenShare}><Icon name="close" size="large" /></button>
      <div className="share-media-list">
        <div className="share-media-files">
          <h1 className="share-media-files-title">Files</h1>
          <div className="share-media-files-item">
            {files.map((file) => (
              <Media key={file.name} {...file} />
            ))}
          </div>
        </div>
        <div className="share-media-videos">
          <div className="share-media-videos-title">
            <h1 className="share-media-videos-title-content">Videos</h1>
          </div>
          <div className="share-media-videos-item" />
          <ul>
            <li><Link to="room/video/hoglib">Hogwart Library</Link></li>
            <li><Link to="room/video/charmsclass">Charms Classroom</Link></li>
            <li><Link to="/video/gryffcommon">Gryffindor Commonroom</Link></li>
            <li><Link to="/video/huffcommon">Hufflepuff Commonroom</Link></li>
            <li><Link to="/video/ravcommon">Ravenclaw Commonroom</Link></li>
            <li><Link to="/video/slythcommon">Slytherin Commonroom</Link></li>
            <li><Link to="/video/hogtrain">Hogwart Express Train</Link></li>
            <li><Link to="/video/potionclass">Snape's potion classroom</Link></li>
            <li><Link to="/video/threebrooms">Three Broomstick Inn</Link></li>
            <li><Link to="/video/diagonalley">Winter Diagon Alley</Link></li>
            <li><Link to="/video/hagrid">Hagrid's Hut</Link></li>
            <li><Link to="/video/lakenight">The Great Lake by night</Link></li>
            <li><Link to="/video/lakeday">The Great Lake by day</Link></li>
            <li><Link to="/video/prefectbath">Prefect's Bathroom</Link></li>
            <li><Link to="/video/kitchens">Hogwart's Kitchens</Link></li>
            <li><Link to="/video/defencedark">Defence against the dark classroom</Link></li>
            <li><Link to="/video/firenzeclass">Firenze's Divination classroom</Link></li>
            <li><Link to="/video/hogheadinn">Hog's Head Inn</Link></li>
            <li><Link to="/video/hospital">Hospital Wing</Link></li>
            <li><Link to="/video/moaningmyrtle">Moaning Myrtle's Bathroom</Link></li>
            <li><Link to="/video/greathall">The Great Hall</Link></li>
            <li><Link to="/video/forbiddenforestnight">Forbidden Forest by night</Link></li>
            <li><Link to="/video/astrology">Astrology classroom</Link></li>
            <li><Link to="/video/herbology">Herbology classroom</Link></li>
          </ul>
        </div>
      </div>
      <label htmlFor="mediaFile" className="label-file">Choisissez des images à partager</label>
      <input type="file" id="mediaFile" name="mediaFile" className="media-choice-input" onChange={handleChange} />
    </div>
  );
};

ShareMedia.propTypes = {
  pictureOpen: PropTypes.bool.isRequired,
  toggleOpenShare: PropTypes.func.isRequired,
  changeFileUrl: PropTypes.func.isRequired,
  addFile: PropTypes.func.isRequired,
  sendImage: PropTypes.func.isRequired,
  fileURL: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ShareMedia;
