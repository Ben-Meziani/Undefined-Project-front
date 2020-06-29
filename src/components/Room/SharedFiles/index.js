/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const SharedFiles = ({ toggleOpenBook, bookOpen }) => {
  return (
    <div className={!bookOpen ? 'shared-files-toggle shared-files' : 'shared-files '}>
      <button type="button" onClick={toggleOpenBook}><Icon name="close" size="large" /></button>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
      <div><Icon name="book" size="large" /></div>
    </div>
  );
};

SharedFiles.propTypes = {
  bookOpen: PropTypes.bool.isRequired,
  toggleOpenBook: PropTypes.func.isRequired,
};

export default SharedFiles;
