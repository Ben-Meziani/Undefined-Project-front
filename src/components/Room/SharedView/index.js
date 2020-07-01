import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SharedView = ({ masterRole }) => {
  console.log('masterRole dans le component vaut', masterRole);

  return (
    <div className="shared-view">

      <div className="shared-view-media">

      </div>
    </div>
  );
};

SharedView.propTypes = {
  masterRole: PropTypes.bool.isRequired,
};

export default SharedView;
