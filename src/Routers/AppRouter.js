import React from 'react';
//, Redirect
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar } from '../Components/UI/Navbar';
import { Footer } from '../Components/UI_Footer/Footer';
//import { NavbarAuth } from '../Components/UI/NavbarAuth';
import AboutScreen from '../Views/AboutScreen';
import LoginScreen from '../Views/LoginScreen';
import RegisterScreen from '../Views/RegisterScreen';
import CoursesScreen from '../Views/CoursesScreen';
import ForumScreen from '../Views/ForumScreen';
import HomeScreen from '../Views/HomeScreen';
import InternshipsScreen from '../Views/InternshipsScreen';
import PageNoFound from '../Views/PageNoFound';
import ProfileScreen from '../Views/ProfileScreen';
import ResourcesScreen from '../Views/ResourcesScreen';

export const AppRouter = () => {
    return (
       <Router>
            <div>
                <Navbar/>

                <Switch>
                    {/* {<Route exact path='/' component={DashBoardRoutes}/>} */}
                    <Route exact path='/Inicio' component={HomeScreen}/>
                    <Route exact path='/Foros' component={ForumScreen}/>
                    <Route exact path='/Pasantias' component={InternshipsScreen}/>
                    <Route exact path='/Cursos' component={CoursesScreen}/>
                    <Route exact path='/Recursos' component={ResourcesScreen}/>
                    <Route exact path='/About' component={AboutScreen}/>
                    <Route exact path='/Login' component={LoginScreen}/>
                    <Route exact path='/Register' component={RegisterScreen}/>
                    <Route exact path='/PageNoFound' component={PageNoFound}/>
                    <Route exact path='/Profile/:userId' component={ProfileScreen}/>
                </Switch>

                <Footer/>
            </div>
       </Router>
    )
}
