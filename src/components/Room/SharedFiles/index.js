/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';
import Book2 from '../../../assets/icons/recipe-book.svg';
import Papyrus from '../../../assets/icons/papyrus.svg';
import Album from '../../../assets/icons/photo-album.svg';
import News from '../../../assets/icons/news.png';
import ReadingBook from '../../../assets/icons/reading-book.svg';
import Story from '../../../assets/icons/story.png';
import Book5 from '../../../assets/icons/book5.png';

import './style.scss';

const SharedFiles = ({ toggleOpenBook, bookOpen }) => {
  return (
    <>
      <div className="shared-files-subcontent">
        <h1 className="subcontent-title">Break-in at Gringotts</h1>
        <p className="subcontent-content">Gringott Security breached</p>
      </div>
      <div className="subcontent-border-large" />
      <div className="subcontent-border-thin" />
      <div className={!bookOpen ? 'shared-files-toggle shared-files' : 'shared-files '}>
        <h1 className="shared-files-title">Your files</h1>
        <div className="shared-files-container">
          <button type="button" onClick={toggleOpenBook}><Icon name="close" size="large" /></button>
          <div><img src={Book2} alt="book" /></div>
          <div><img src={Book5} alt="book" /></div>
          <div><img src={Album} alt="book" /></div>
          <div><img src={News} alt="book" /></div>
          <div><img src={Book2} alt="book" /></div>
          <div><img src={Papyrus} alt="book" /></div>
          <div><img src={Story} alt="book" /></div>
          <div><img src={Book2} alt="book" /></div>
          <div><img src={ReadingBook} alt="book" /></div>
        </div>
      </div>
    </>
  );
};

SharedFiles.propTypes = {
  bookOpen: PropTypes.bool.isRequired,
  toggleOpenBook: PropTypes.func.isRequired,
};

export default SharedFiles;
