import { types } from "../Types/type";

import Swal from "sweetalert2";
import {
    facebookAuthProvider,
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../../firebase/firebase-config.js";

export const startLoginEmailPassword = () => {};

export const startLoginWhitGoogle = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
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




export const login = (uid, displayName, UserProfile) => {
	return {
		type: types.authLogin,
		payload: {
			uid,
			displayName,
			profile: {
				...UserProfile,
			},
		},
	};
};
