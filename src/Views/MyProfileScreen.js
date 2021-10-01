import React from 'react';
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router';
import { AboutMe } from '../Components/UI_MyProfile/AboutMe';

export const MyProfileScreen = () => {
    const MyUser = useSelector(state => state.auth);

    return (
        <>
            {
                (Object.entries(MyUser).length === 0) ? ( <Redirect to = "/Login" />) : (<AboutMe/>)
            }
        </>
    )
}
