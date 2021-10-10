import React from "react";
//, Redirect
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Navbar } from "../Components/UI/Navbar";
//import { NavbarAuth } from '../Components/UI/NavbarAuth';
import AboutScreen from "../Views/AboutScreen";
import { NewQuestion } from "../Components/UI_Forum/NewQuestion";
import LoginScreen from "../Views/LoginScreen";
import CoursesScreen from "../Views/CoursesScreen";
import ForumScreen from "../Views/ForumScreen";
import HomeScreen from "../Views/HomeScreen";
import InternshipsScreen from "../Views/InternshipsScreen";
import PageNoFound from "../Views/PageNoFound";
import ProfileScreen from "../Views/ProfileScreen";
import ResourcesScreen from "../Views/ResourcesScreen";
import { FullIntership } from "../Components/UI_Intership/FullIntership";
import { NewCourse } from "../Components/UI_Cursos/NewCourse";
import { NewResource } from "../Components/UI_Recursos/NewResource";
import { MyProfileScreen } from "../Views/MyProfileScreen";
import EnterpriseScreen from "../Views/EnterpriseScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					{/*
                     {<Route exact path='/' component={DashBoardRoutes}/>} */}
					<PublicRoute
						exact
						path="/"
						component={HomeScreen}
					/>
					<PublicRoute
						exact
						path="/Foros"
						component={ForumScreen}
					/>
					<PublicRoute
						exact
						path="/Pasantias"
						component={InternshipsScreen}
					/>
					<PublicRoute
						exact
						path="/Pasantia/:IdIntership"
						component={FullIntership}
					/>
					<PublicRoute
						exact
						path="/Cursos"
						component={CoursesScreen}
					/>
					<PublicRoute
						exact
						path="/Recursos"
						component={ResourcesScreen}
					/>
					<PublicRoute
						exact
						path="/About"
						component={AboutScreen}
					/>
					<PublicRoute
						exact
						path="/Login"
						component={LoginScreen}
					/>
					<PublicRoute
						exact
						path="/New_Question"
						component={NewQuestion}
					/>
					<PublicRoute
						exact
						path="/New_Course"
						component={NewCourse}
					/>
					<PublicRoute
						exact
						path="/New_Resource"
						component={NewResource}
					/>
					<PublicRoute
						exact
						path="/PageNoFound"
						component={PageNoFound}
					/>
					<PrivateRoute
						exact
						path="/Profile/:userId"
						component={ProfileScreen}
					/>
					<PublicRoute
						exact
						path="/MyProfile/:userId"
						component={MyProfileScreen}
					/>
					<PublicRoute
						exact
						path="/MyPime/:pymeId"
						component={EnterpriseScreen}
					/>
					<Redirect to="/error404" />
				</Switch>
			</div>
		</Router>
	);
};
