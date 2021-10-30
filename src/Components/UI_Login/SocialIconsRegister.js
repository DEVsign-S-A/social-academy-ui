import React from "react";
import { useDispatch } from "react-redux";
import {
	startLoginWithFacebook,
	startLoginWithGithub,
	startLoginWithGoogle,
} from "../../Redux/Actions/authActions";
import { BtnSocialIcon } from "../Tailwind/LoginTW";

export const SocialIconsRegister = () => {
	const dispatch = useDispatch();

	const handleLoginGoogle = (e) => {
		e.preventDefault();
		dispatch(startLoginWithGoogle());
	};

	const handleLoginGithub = (e) => {
		e.preventDefault();
		dispatch(startLoginWithGithub());
	};

	const handleLoginFacebook = (e) => {
		e.preventDefault();
		dispatch(startLoginWithFacebook());
	};

	return (
		<div className="flex justify-center items-center my-2">
			<BtnSocialIcon $Red onClick={handleLoginGoogle}>
				<i className="fab fa-google"></i>
			</BtnSocialIcon>
			<BtnSocialIcon $Blue onClick={handleLoginFacebook}>
				<i className="fab fa-facebook-f"></i>
			</BtnSocialIcon>
			<BtnSocialIcon $Red>
				<i className="fab fa-twitter"></i>
			</BtnSocialIcon>
			<BtnSocialIcon $Blue>
				<i className="fab fa-microsoft"></i>
			</BtnSocialIcon>
			<BtnSocialIcon $Red onClick={handleLoginGithub}>
				<i className="fab fa-github"></i>
			</BtnSocialIcon>
		</div>
	);
};
