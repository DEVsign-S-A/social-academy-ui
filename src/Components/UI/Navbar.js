import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import "../Styles/NavModalTooltip.css";

export const Navbar = () => {
	const { uid } = useSelector((state) => state.auth);

	return (
		<>
			<nav className="fixed w-full top-0 z-20 select-none flex items-center justify-between flex-wrap bg-primary overflow-hidden shadow-xl transition-all ease-in-out duration-700">
				<div className="flex text-white font-bold text-2xl m-5">
					<img
						className="w-9/12 mx-0"
						src={`./assets/ICONS/SOCIALACADEMY_LOGO.svg`}
						alt="icon-user"
					/>
				</div>

				<div className="flex md:hidden">
					<img
						className="w-7 mx-5"
						src={`./assets/ICONS/Filter.svg`}
						alt="icon-user"
					/>
				</div>

				<div className="flex justify-between">
					{!uid && (
						<div className="hidden md:flex transition-all ease-in-out duration-700">
							<Link to="/">
								<div className="iconI cursor-pointer flex items-center p-2 relavite">
									<img
										className="w-7 mx-5"
										src={`./assets/ICONS/HOME.svg`}
										alt="icon-user"
									/>
									<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip">
										<div className="bg-white absolute z-50 pointer-events-none  h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45"></div>
										Inicio
									</div>
								</div>
							</Link>
						</div>
					)}

					<div>
						{!uid && (
							<NavLink exact to="/About">
								<div className="iconA cursor-pointer flex items-center font-md p-2 mt-2">
									<img
										className="w-7 mx-5"
										src={`./assets/ICONS/CURSOS.svg`}
										alt="icon-user"
									/>
									<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip">
										<div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
										About
									</div>
								</div>
							</NavLink>
						)}
					</div>
					{!uid && (
						<NavLink exact to="/Login">
							<div className="iconL cursor-pointer flex items-center font-md p-2 mt-1">
								<img
									className="w-8 mx-5"
									src={`./assets/ICONS/LOGIN.svg`}
									alt="icon-user"
								/>
								<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip">
									<div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
									Login
								</div>
							</div>
						</NavLink>
					)}

					
						<NavLink exact to="/Foros">
							<div className="iconF cursor-pointer flex items-center p-2">
								<img
									className={`${uid ? 'w-9 my-1 mx-4' : 'w-8 mx-5'}`}
									src='https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/FOROS.svg?alt=media&token=f616856e-d5e7-4171-8207-3393de584ccf'
									alt="icon-user"
								/>
								<div className="absolute transition-all duration-500 ease-in-out bg-white rounded-xl z-50  shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip">
									<div className="bg-white pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 z-50"></div>
									Foros
								</div>
							</div>
						</NavLink>
					
					{uid && (
						<NavLink exact to="/Pasantias">
							<div className="iconP cursor-pointer flex items-center font-md p-1 mt-2">
								<img
									className="w-8 my-1 mx-4"
									src='https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/PASANTIAS.svg?alt=media&token=ad0e3032-5d96-4e12-b460-fa9f89b46062'
									alt="icon-user"
								/>

								<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-2 text-xs px-4 py-2 pointer-events-none tooltip">
									<div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
									Pasantias
								</div>
							</div>
						</NavLink>
					)}
					{uid && (
						<NavLink exact to="/Cursos">
							<div className="iconR cursor-pointer flex items-center font-md p-2 mt-2">
								<img
									className="w-8 my-1 mx-4"
									src='https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/videos.svg?alt=media&token=d739daee-e602-4f50-bcba-2452596b80dd'
									alt="icon-user"
								/>
								<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-3 text-xs px-4 py-2 pointer-events-none tooltip">
									<div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-12 transform -translate-x-2/4 rotate-45 "></div>
									Cursos
								</div>
							</div>
						</NavLink>
					)}
					{uid && (
						<NavLink exact to="/Recursos">
							<div className="iconR cursor-pointer flex items-center">
								<img
									className="w-8 my-2 mx-4"
									src='https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/APRENDE.svg?alt=media&token=8a764b94-62d4-43a0-88fa-52e8b273f7c3'
									alt="icon-user"
								/>
								<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-3 text-xs px-4 py-2 pointer-events-none tooltip">
									<div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-12 transform -translate-x-2/4 rotate-45 "></div>
									Recursos
								</div>
							</div>
						</NavLink>
					)}
          {uid && (
						<NavLink exact to="/MyProfile/:userId">
							<div className="iconR cursor-pointer flex items-center">
								<img
									className="w-10 m-2"
									src='https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/HOME.svg?alt=media&token=295eee38-661b-4272-aa2c-6ec0df50759b'
									alt="icon-user"
								/>
								<div className="absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-3 text-xs px-4 py-2 pointer-events-none tooltip">
									<div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-12 transform -translate-x-2/4 rotate-45 "></div>
									Recursos
								</div>
							</div>
						</NavLink>
					)}
				</div>
			</nav>
		</>
	);
};
