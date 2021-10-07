import React from 'react';
//, Redirect
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar } from '../Components/UI/Navbar';
//import { NavbarAuth } from '../Components/UI/NavbarAuth';
import AboutScreen from '../Views/AboutScreen';
import {NewQuestion} from '../Components/UI_Forum/NewQuestion';
import LoginScreen from '../Views/LoginScreen';
import RegisterScreen from '../Views/RegisterScreen';
import CoursesScreen from '../Views/CoursesScreen';
import ForumScreen from '../Views/ForumScreen';
import HomeScreen from '../Views/HomeScreen';
import InternshipsScreen from '../Views/InternshipsScreen';
import PageNoFound from '../Views/PageNoFound';
import ProfileScreen from '../Views/ProfileScreen';
import ResourcesScreen from '../Views/ResourcesScreen';
import {FullIntership} from '../Components/UI_Intership/FullIntership';
import { NewCourse } from '../Components/UI_Cursos/NewCourse';
import { NewResource } from '../Components/UI_Recursos/NewResource';
import { MyProfileScreen } from '../Views/MyProfileScreen';
import EnterpriseScreen from '../Views/EnterpriseScreen';

export const AppRouter = () => {
    return (
       <Router>
            <div>
                <Navbar/>
                <Switch>
                    {/*
                     {<Route exact path='/' component={DashBoardRoutes}/>} */}
                    <Route exact path='/Inicio' component={HomeScreen}/>
                    <Route exact path='/Foros' component={ForumScreen}/>
                    <Route exact path='/Pasantias' component={InternshipsScreen}/>
                    <Route exact path='/Pasantia/:IdIntership' component={FullIntership}/>
                    <Route exact path='/Cursos' component={CoursesScreen}/>
                    <Route exact path='/Recursos' component={ResourcesScreen}/>
                    <Route exact path='/About' component={AboutScreen}/>
                    <Route exact path='/Login' component={LoginScreen}/>
                    <Route exact path='/New_Question' component={NewQuestion}/>
                    <Route exact path = '/New_Course' component= {NewCourse} />
                    <Route exact path = "/New_Resource" component = {NewResource} />
                    <Route exact path='/Register' component={RegisterScreen}/>
                    <Route exact path='/PageNoFound' component={PageNoFound}/>
                    <Route exact path='/Profile/:userId' component={ProfileScreen}/>
                    <Route exact path= '/MyProfile/:userId' component ={MyProfileScreen} />
                    <Route exact path='/MyPime/:pymeId' component={EnterpriseScreen}/>
                </Switch>
            </div>
       </Router>
    )
}
