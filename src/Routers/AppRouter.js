import React from "react";
//, Redirect
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
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
import { useSelector } from "react-redux";
import ContactScreen from "../Views/ContactScreen";
import { EditQuestion } from "../Components/UI_Forum/EditQuestion";
import { FullResource } from "../Components/UI_Recursos/FullResource";
import { ConditionsScreen } from "../Views/ConditionsScreen";

export const AppRouter = () => {
	const {uid} = useSelector(state => state.auth);

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
						isAuth={!!uid}
					/>
					<Route
						exact
						path="/Foros"
						component={ForumScreen}
					/>
					<PrivateRoute
						exact
						path="/Pasantias"
						component={InternshipsScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/Contactanos"
						component={ContactScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/Pasantia/:IdIntership"
						component={FullIntership}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/Cursos"
						component={CoursesScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/Recursos"
						component={ResourcesScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/Resource/:resourceId"
						component={FullResource}
						isAuth={!!uid}
					/>
					<PublicRoute
						exact
						path="/About"
						component={AboutScreen}
						isAuth={!!uid}
					/>
					<PublicRoute
						exact
						path="/Login"
						component={LoginScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/New_Question"
						component={NewQuestion}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/New_Course"
						component={NewCourse}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/New_Resource"
						component={NewResource}
						isAuth={!!uid}
					/>
					<PublicRoute
						exact
						path="/PageNoFound"
						component={PageNoFound}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/Profile/:userId"
						component={ProfileScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/MyProfile"
						component={MyProfileScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/MyPime/:pymeId"
						component={EnterpriseScreen}
						isAuth={!!uid}
					/>
					<PrivateRoute
						exact
						path="/forum/edit/:idQuestion"
						component={EditQuestion}
						isAuth={!!uid}
					/>
					<Route
						exact
						path="/TermsAndConditions"
						component={ConditionsScreen}
					/>
					<Route
						exact
						path="/error404"
						component={PageNoFound}
					/>
					<Redirect to="/error404" />
				</Switch>
			</div>
		</Router>
	);
};
