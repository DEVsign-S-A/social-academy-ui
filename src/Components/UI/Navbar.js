import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleNavbar } from "../../Redux/Actions/uiActions";

import "../Styles/NavModalTooltip.css";
import { FullItemsNavbar } from "./FullItemsNavbar";
import { ItemsNavbar } from "./ItemsNavbar";

export const Navbar = () => {
	const { toggleNavbar } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setToggleNavbar(!toggleNavbar));
	};

	return (
		<>
			<nav className="fixed w-full top-0 z-20 select-none flex items-center justify-between flex-wrap bg-primary overflow-hidden shadow-xl transition-all ease-in-out duration-700">
				<div className="flex md:hidden" onClick={handleClose}>
					<i className="fas fa-bars text-3xl m-3 text-WhiteSocial cursor-pointer"></i>
				</div>

				<div className="flex text-white font-bold text-2xl m-5">
					<img
						className="w-9/12 mx-0"
						src={`./assets/ICONS/SOCIALACADEMY_LOGO.svg`}
						alt="icon-user"
					/>
				</div>

				{toggleNavbar ? (
					<div className="animate__animated animate__fadeInLeft">
						<FullItemsNavbar />
					</div>
				) : (
					<div className="animate__animated animate__fadeInLeft">
						<ItemsNavbar />
					</div>
				)}
			</nav>
		</>
	);
};
