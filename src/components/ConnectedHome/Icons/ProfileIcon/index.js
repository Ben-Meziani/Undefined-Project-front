import React from 'react';

import UserProfile from './UserProfile.svg';

import './style.scss';

const ProfileIcon = () => (
  <div className="user-profile-icon">
    <img src={UserProfile} className="user-profile-icon-svg" alt="user" />
  </div>
);

export default ProfileIcon;