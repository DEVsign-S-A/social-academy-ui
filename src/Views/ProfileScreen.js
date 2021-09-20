import React from 'react';
import { AboutUser } from '../Components/UI_UserProfile/AboutUser';
import { UserExperience } from '../Components/UI_UserProfile/UserExperience';
import { UserInfo } from '../Components/UI_UserProfile/UserInfo';

const ProfileScreen = () => {
  return (
    <div className = "flex flex-row ProfileScreen">
      <UserInfo/>
      <AboutUser/>
      <UserExperience/>
    </div>
  );
};

export default ProfileScreen;
