import React from 'react';
import { AboutUser } from '../Components/UI_UserProfile/AboutUser';
import { UserExperience } from '../Components/UI_UserProfile/UserExperience';
import { UserInfo } from '../Components/UI_UserProfile/UserInfo';
import { dataUser } from '../data/dataUser';

const ProfileScreen = () => {
  const userId = dataUser[0];
  return (
    <div className = "flex flex-row ProfileScreen">
      <UserInfo {...userId} />
      <AboutUser {...userId} />
      <UserExperience {...userId} />
    </div>
  );
};

export default ProfileScreen;
