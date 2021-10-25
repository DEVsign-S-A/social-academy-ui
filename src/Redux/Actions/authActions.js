import { types } from "../Types/type";

import Swal from "sweetalert2";
import {
    facebookAuthProvider,
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../../firebase/firebase-config.js";
import { finishLoading, startLoading } from "./loadActions";

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
	return (dispatch) =>{
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async ({user}) =>{
				await user.updateProfile({
					displayName: name
				});
				dispatch(login(user.uid, user.displayName))
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
			dispatch(login(user.uid, user.displayName));
			dispatch(finishLoading());
			console.log(user);
		}).catch(e =>{
            Swal.fire('Error', e.message, 'error');
            dispatch(finishLoading());
        });
	}
};

export const startLoginWhitGoogle = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then((user) => {
                dispatch(
					login(
						user.user.uid,
						user.user.displayName,
						user.additionalUserInfo.profile
					)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};

export const startLoginWhitGithub = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(githubAuthProvider)
			.then((user) => {
                dispatch(
					login(
						user.user.uid,
						user.user.displayName,
						user.additionalUserInfo.profile
					)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "error");
				console.log(e);
			});
	};
};


export const startLoginWhitFacebook = () => {
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

export const login = (uid, displayName) => ({
		type: types.authLogin,
		payload: {
			uid,
			displayName
			/*profile: {
				...UserProfile,
			},*/
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
