import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
//, Redirect
import { BrowserRouter as Router, Switch } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { login } from "../Redux/Actions/authActions";

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	

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
						isAuth={isLoggedIn}
					/>
					<PublicRoute
						exact
						path="/Foros"
						component={ForumScreen}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/Pasantias"
						component={InternshipsScreen}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/Pasantia/:IdIntership"
						component={FullIntership}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/Cursos"
						component={CoursesScreen}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/Recursos"
						component={ResourcesScreen}
						isAuth={isLoggedIn}
					/>
					<PublicRoute
						exact
						path="/About"
						component={AboutScreen}
						isAuth={isLoggedIn}
					/>
					<PublicRoute
						exact
						path="/Login"
						component={LoginScreen}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/New_Question"
						component={NewQuestion}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/New_Course"
						component={NewCourse}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/New_Resource"
						component={NewResource}
						isAuth={isLoggedIn}
					/>
					<PublicRoute
						exact
						path="/PageNoFound"
						component={PageNoFound}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/Profile/:userId"
						component={ProfileScreen}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/MyProfile/:userId"
						component={MyProfileScreen}
						isAuth={isLoggedIn}
					/>
					<PrivateRoute
						exact
						path="/MyPime/:pymeId"
						component={EnterpriseScreen}
						isAuth={isLoggedIn}
					/>
				</Switch>
			</div>
		</Router>
	);
};
