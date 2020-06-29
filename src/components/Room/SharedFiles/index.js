import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const SharedFiles = ({ bookOpen }) => {
  return (
    <div className={!bookOpen ? 'shared-files-toggle shared-files' : 'shared-files '}>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
      <div><Icon name="book" size="huge" /></div>
    </div>
  );
};

SharedFiles.propTypes = {
  bookOpen: PropTypes.bool.isRequired,
};

export default SharedFiles;
