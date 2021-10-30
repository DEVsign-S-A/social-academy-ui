import { types } from "../Types/type";

import Swal from "sweetalert2";
import {
    facebookAuthProvider,
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../../firebase/firebase-config.js";
import { finishLoading, startLoading } from "./loadActions";
import { activeUser, createNewProfile, existeUsuario } from "./userInfoActions";

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
	return (dispatch) =>{
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async ({user}) =>{
				await user.updateProfile({
					displayName: name
				});
				dispatch(createNewProfile(user.uid, user.displayName, user.email));
				//dispatch(login(user.uid, user.displayName));
				dispatch(activeUser(user.uid));
			})
			.catch(e => {
                Swal.fire('Error', e.message, 'error');
            })
	}
}

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) =>{
		dispatch(startLoading());
		return firebase.auth().signInWithEmailAndPassword(email, password)
		.then(({user})=>{
			dispatch(finishLoading());
			dispatch(activeUser(user.uid));
		}).catch(e =>{
            Swal.fire('Error', e.message, 'error');
            dispatch(finishLoading());
        });
	}
};

export const startLoginWithGoogle = () => {
	return (dispatch) => {
		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(async (user) => {
				const usuario = await existeUsuario(user.user.uid);
				if(usuario === false){
					dispatch(createNewProfile(user.user.uid, user.user.displayName, user.user.email));
				}
					dispatch(activeUser(user.user.uid));
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};

export const startLoginWithGithub = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(githubAuthProvider)
			.then(async (user) => {
                const usuario = await existeUsuario(user.user.uid);
				if(usuario === false){
					dispatch(createNewProfile(user.user.uid, user.user.displayName, user.user.email));
				}
					dispatch(activeUser(user.user.uid));
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};


export const startLoginWithFacebook = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(facebookAuthProvider)
			.then((user) => {
				console.log(user);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};

export const login = (userInfo) => ({
		type: types.authLogin,
		payload: {
			...userInfo
		}
});

export const startLogout = () =>{
	return async (dispatch) =>{
		await firebase.auth().signOut();
		dispatch(logout());
	}
}

export const logout = () =>({
	type: types.authLogout
})
