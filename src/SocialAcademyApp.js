import React from "react";
import {Provider} from 'react-redux'
import { store } from "./Redux/Store";
import { AppRouter } from "./Routers/AppRouter";

export const SocialAcademyApp = () => {
   return (
		<Provider store = {store} >
        {
            //el Router
            <AppRouter/>
        }
		</Provider>
	);
}
