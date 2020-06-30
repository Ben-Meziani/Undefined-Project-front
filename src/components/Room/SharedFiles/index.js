/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';
import Book2 from '../../../assets/icons/recipe-book.svg';
import Papyrus from '../../../assets/icons/papyrus.svg';
import Album from '../../../assets/icons/photo-album.svg';
import OpenBook from '../../../assets/icons/open-book.svg';

import './style.scss';

const SharedFiles = ({ toggleOpenBook, bookOpen }) => {
  return (
    <div className={!bookOpen ? 'shared-files-toggle shared-files' : 'shared-files '}>
      <button type="button" onClick={toggleOpenBook}><Icon name="close" size="large" /></button>
      <div><img src={Book2} alt="book" /></div>
      <div><img src={Papyrus} alt="book" /></div>
      <div><img src={Album} alt="book" /></div>
      <div><img src={OpenBook} alt="book" /></div>
      <div><img src={Book2} alt="book" /></div>
      <div><img src={Papyrus} alt="book" /></div>
      <div><img src={Album} alt="book" /></div>
      <div><img src={OpenBook} alt="book" /></div>
      <div><img src={Book2} alt="book" /></div>
      <div><img src={Papyrus} alt="book" /></div>
    </div>
  );
};

SharedFiles.propTypes = {
  bookOpen: PropTypes.bool.isRequired,
  toggleOpenBook: PropTypes.func.isRequired,
};

export default SharedFiles;
