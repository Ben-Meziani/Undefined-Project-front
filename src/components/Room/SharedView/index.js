import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SharedView = ({ masterRole }) => {
  console.log('masterRole dans le component vaut', masterRole);
  const handleChange = (evt) => {
    console.log('---- je récupère le nom du fichier sélectionné par le user ----');
    evt.preventDefault();
    console.log(evt.target.files[0]);
    const newIconUrl = URL.createObjectURL(evt.target.files[0]);
  };

  return (
    <div className="shared-view">
    
      <div className="shared-view-media" />
    </div>
  );
};

SharedView.propTypes = {
  masterRole: PropTypes.bool.isRequired,
};

export default SharedView;
