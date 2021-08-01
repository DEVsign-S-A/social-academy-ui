import React from "react";
import {Provider} from 'react-redux'
import { store } from "./Redux/Store";

export const SocialAcademyApp = () => {
   return (
		<Provider store = {store} >
        {
            //el Router
            <h1>
                Hola Mundo¡¡¡¡
            </h1>
        }
		</Provider>
	);
}
