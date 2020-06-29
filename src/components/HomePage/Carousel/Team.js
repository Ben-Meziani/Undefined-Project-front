import React from 'react';
import './style.scss';

const src = 'https://pbs.twimg.com/profile_images/1028408684559458304/uE0XdKkL.jpg';

const Team = () => (
  <div className="carousel-show-team">
    <h1 className="title">The Team</h1>
    <div className="item">
      <img className="carousel-show-img" src={src} alt="avatar" />
      <div className="text">
        Te eum doming eirmod, nominati pertinacia argumentum ad his.
      </div>
    </div>
    <div className="item">
      <img className="carousel-show-img" src={src} alt="avatar" />
      <div className="text">
        Te eum doming eirmod, nominati pertinacia argumentum ad his.
      </div>
    </div>
    <div className="item">
      <img className="carousel-show-img" src={src} alt="avatar" />
      <div className="text">
        Te eum doming eirmod, nominati pertinacia argumentum ad his.
      </div>
    </div>
    <div className="item">
      <img className="carousel-show-img" src={src} alt="avatar" />
      <div className="text">
        Te eum doming eirmod, nominati pertinacia argumentum ad his.
      </div>
    </div>
    <div className="item">
      <img className="carousel-show-img" src={src} alt="avatar" />
      <div className="text">
        Te eum doming eirmod, nominati pertinacia argumentum ad his.
      </div>
    </div>
  </div>
);

export default Team;
