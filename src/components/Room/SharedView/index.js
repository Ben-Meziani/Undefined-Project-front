import React from 'react';

import './style.scss';

import HomeBg from '../../../assets/HomeBg-mobile.jpg';

const SharedView = () => (
  <div className="shared-view">
    <img
      src={HomeBg}
      alt="shared screen"
      className="shared-view-img"
    />
  </div>
);

export default SharedView;
