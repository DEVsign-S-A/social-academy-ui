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

				<div className="w-2/5 sm:w-4/12 md:w-3/12 lg:w-2/12 flex text-white font-bold text-2xl m-4 sm:m-3">
					<img
						className="w-12/12 mx-0"
						src={`./assets/ICONS/WHITEACADEM_Y2.svg`}
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
