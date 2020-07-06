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

// IMPORT IMAGES URLS
const BookUrl = `https://undefined-project.tk/${Book2}`;
const PapyrusUrl = `https://undefined-project.tk/${Papyrus}`;
const AlbumUrl = `https://undefined-project.tk/${Album}`;
const NewsUrl = `https://undefined-project.tk/${News}`;
const ReadingUrl = `https://undefined-project.tk/${ReadingBook}`;
const StoryUrl = `https://undefined-project.tk/${Story}`;
const Book2Url = `https://undefined-project.tk/${Book5}`;



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
          <div><img src={BookUrl} alt="book" /></div>
          <div><img src={Book2Url} alt="book" /></div>
          <div><img src={AlbumUrl} alt="book" /></div>
          <div><img src={NewsUrl} alt="book" /></div>
          <div><img src={BookUrl} alt="book" /></div>
          <div><img src={PapyrusUrl} alt="book" /></div>
          <div><img src={StoryUrl} alt="book" /></div>
          <div><img src={BookUrl} alt="book" /></div>
          <div><img src={ReadingUrl} alt="book" /></div>
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
