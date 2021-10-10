import React from "react";
import { useDispatch } from "react-redux";
import {
	startLoginWhitFacebook,
	startLoginWhitGithub,
	startLoginWhitGoogle,
} from "../../Redux/Actions/authActions";
import { BtnSocialIcon } from "../Tailwind/LoginTW";

export const SocialIconsRegister = () => {
	const dispatch = useDispatch();

	const handleLoginGoogle = () => {
		dispatch(startLoginWhitGoogle());
	};

	const handleLoginGithub = () => {
		dispatch(startLoginWhitGithub());
	};

	const handleLoginFacebook = () => {
		dispatch(startLoginWhitFacebook());
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
