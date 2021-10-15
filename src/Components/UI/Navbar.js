import React, { useState } from "react";

import "../Styles/NavModalTooltip.css";
import { FullItemsNavbar } from "./FullItemsNavbar";
import { ItemsNavbar } from "./ItemsNavbar";

export const Navbar = () => {

	const [toggle, setToggle] = useState(true);



	return (
		<>
			<nav className="fixed w-full top-0 z-20 select-none flex items-center justify-between flex-wrap bg-primary overflow-hidden shadow-xl transition-all ease-in-out duration-700">
				<div className="flex md:hidden"
				onClick={() => setToggle(!toggle)}
				>
					<i className="fas fa-bars text-3xl m-3 text-WhiteSocial cursor-pointer"></i>
				</div>

				<div className="flex text-white font-bold text-2xl m-5">
					<img
						className="w-9/12 mx-0"
						src={`./assets/ICONS/SOCIALACADEMY_LOGO.svg`}
						alt="icon-user"
					/>
				</div>


				{
					toggle ? <ItemsNavbar/> : <FullItemsNavbar />
				}

				



			</nav>
		</>
	);
};
