import React from 'react';
import { Redirect, useParams } from 'react-router';
import { AboutUser } from '../Components/UI_UserProfile/AboutUser';
import { UserExperience } from '../Components/UI_UserProfile/UserExperience';
import { UserInfo } from '../Components/UI_UserProfile/UserInfo';
import { getUserById } from '../Services/getUserById';

const ProfileScreen = () => {
  const {userId} = useParams();
  const userProfile = getUserById(userId);

  return (
    <div className = "flex flex-row ProfileScreen">
      {
        (!userProfile) ? ( <Redirect to = "/PageNoFound" />) : (
          <>
            <UserInfo {...userProfile} />
            <AboutUser {...userProfile} />
            <UserExperience {...userProfile} />
          </>
        )
      }
    </div>
  );
};

export default ProfileScreen;
