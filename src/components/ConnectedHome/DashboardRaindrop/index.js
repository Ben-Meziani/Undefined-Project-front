/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React from 'react';

import raindrop from 'src/assets/white-raindrop.png';

import './style.scss';

const imageUrl = `https://undefined-project.tk/${raindrop}`;

const DashboardRainDrop = () => {
  console.log('raindrop vaut', raindrop);
  return (
    <div className="dashboard-raindrop-animation">
      <div className="white-raindrop1">
        <img src={imageUrl} alt="white raindrop" />
      </div>
      <div className="white-raindrop2">
        <img src={imageUrl} alt="white raindrop" />
      </div>
      <div className="white-raindrop3">
        <img src={imageUrl} alt="white raindrop" />
      </div>
      <div className="white-raindrop4">
        <img src={imageUrl} alt="white raindrop" />
      </div>
      <div className="white-raindrop5">
        <img src={imageUrl} alt="white raindrop" />
      </div>
      <div className="white-raindrop6">
        <img src={imageUrl} alt="white raindrop" />
      </div>
      <div className="white-raindrop7">
        <img src={imageUrl} alt="white raindrop" />
      </div>
    </div>
  );
};

export default DashboardRainDrop;
