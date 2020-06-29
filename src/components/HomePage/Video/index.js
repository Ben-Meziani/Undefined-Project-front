import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './style.scss';

const Video = () => (
  // Render a YouTube video player
  <div className="video">
    <ReactPlayer url="https://www.youtube.com/watch?v=pAHciSqi1-8" />
    <ul>
      <li>Video 1</li>
      <li>Video 2</li>
    </ul>
  </div>

);

export default Video;
