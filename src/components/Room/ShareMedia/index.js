/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
            <li><Link to="/video/hoglib">Hogwart Library</Link></li>
            <li><Link to="/video/charmsclass">Charms Classroom</Link></li>
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
