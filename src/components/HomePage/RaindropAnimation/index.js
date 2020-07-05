import React from 'react';

import raindrop from '../../../assets/transparent-raindrop-23.png';

import './style.scss';

const imageUrl = `https://undefined-project.tk/${raindrop}`;

const RainDropAnimation = () => {
  return (
    <div className="raindrop-animation">
      <div className="raindrop1">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop2">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop3">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop4">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop5">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop6">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop7">
        <img src={imageUrl} alt="black raindrop" />
      </div>
      <div className="raindrop8">
        <img src={imageUrl} alt="black raindrop" />
      </div>
    </div>
  );
};

export default RainDropAnimation;
