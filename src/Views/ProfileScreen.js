import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { AboutUser } from '../Components/UI_UserProfile/AboutUser';
import { UserExperience } from '../Components/UI_UserProfile/UserExperience';
import { UserInfo } from '../Components/UI_UserProfile/UserInfo';
import { getUserInfo } from '../Redux/Actions/userInfoActions';

const ProfileScreen = () => {
  const {userId} = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUserInfo(userId));
  }, [dispatch])

  const user = useSelector(state => state.user);
  
  //console.log(user);

  return (
    <div className = "flex flex-row ProfileScreen">
      {
        (user) ? (<>
            <UserInfo {...user} />
            <AboutUser {...user} />
            <UserExperience {...user} />
          </>
        ):( <Redirect to = "/error404" />) 
      }
    </div>
  );
};

export default ProfileScreen;
