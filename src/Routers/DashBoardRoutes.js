import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {NavbarAuth} from '../Components/UI/NavbarAuth';
import AboutScreen from '../Views/AboutScreen';
import CoursesScreen from '../Views/CoursesScreen';
import ForumScreen from '../Views/ForumScreen';
import InternshipsScreen from '../Views/InternshipsScreen';
import LoginScreen from '../Views/LoginScreen';
import { MyProfileScreen } from '../Views/MyProfileScreen';
import PageNoFound from '../Views/PageNoFound';
import ProfileScreen from '../Views/ProfileScreen';
import RegisterScreen from '../Views/RegisterScreen';
import ResourcesScreen from '../Views/ResourcesScreen';

export const DashBoardRoutes = () => {
    return (
        <>
           <NavbarAuth/>    

           <div>
               <Switch>
                    <Route exact path='/Foros' component={ForumScreen}/>
                    <Route exact path='/Pasantias' component={InternshipsScreen}/>
                    <Route exact path='/Cursos' component={CoursesScreen}/>
                    <Route exact path='/Recursos' component={ResourcesScreen}/>
                    <Route exact path='/About' component={AboutScreen}/>
                    <Route exact path='/Login' component={LoginScreen}/>
                    <Route exact path='/Register' component={RegisterScreen}/>
                    <Route exact path='/PageNoFound' component={PageNoFound}/>
                    <Route exact path='/Profile/:userId' component={ProfileScreen}/>
                    <Route exact path='/MyProfile/:userId' component={MyProfileScreen}/>
                    <Redirect to='/PageNoFound'/>
               </Switch>
           </div>
        </>
    )   
}
