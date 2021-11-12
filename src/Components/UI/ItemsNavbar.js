import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { GridModalItems } from "./GridModalItems";
import Tooltip from "@material-ui/core/Tooltip";

export const ItemsNavbar = () => {
	const { uid, fotoPerfil } = useSelector((state) => state.auth);
	const [itemModal, setItemModal] = useState(false);
	return (
		<>
			<div className="flex justify-between">
				{!uid && (
					<div className="hidden md:flex">
						<Link to="/">
							<Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Inicio</h1>}
										placement="bottom"
										arrow>
								<div className="cursor-pointer flex items-center font-md m-3" >
									<img
										className="w-8 mx-5 mt-1"
										src={`./assets/ICONS/HOME.svg`}
										alt="icon-user"
									/>	
								</div>	
							</Tooltip>	
						</Link>
					</div>
				)}
							
        <div>
          {!uid && (
            <NavLink exact to="/About" className="hidden md:flex">
				<Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Acerca de</h1>}
							placement="bottom"
							arrow>
					<div className="cursor-pointer flex items-center font-md m-3">
						<img
						className="w-8 mx-5 mt-2"
						src='https://res.cloudinary.com/socialacademy/image/upload/v1635888369/Social%20Academy%20Image/icons%20General/CURSOS_ldaubb.svg'
						alt="icon-user"
						/>
					</div>
				</Tooltip>
            </NavLink>
          )}
        </div>

        <NavLink exact to="/Foros" className="hidden md:flex">
				<Tooltip title= {<h1 className = "text-sm font-Poppins text-white " >Foros</h1>}
							placement="bottom"
							arrow>
					<div className="cursor-pointer flex items-center font-md m-3">
						<img
						className={`${uid ? "w-9 my-1 mx-4" : "w-8 mx-5 mb-1"}`}
						src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/FOROS.svg?alt=media&token=f616856e-d5e7-4171-8207-3393de584ccf"
						alt="icon-user"
						/>
					</div>
				</Tooltip>
        </NavLink>

        {!uid && (
          <NavLink exact to="/Login" className="hidden md:flex">
			  <Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Login</h1>}
							placement="bottom"
							arrow>
					<div className="cursor-pointer flex items-center font-md m-3">
					<img
						className="w-8 mx-5 mb-1"
						src={`./assets/ICONS/LOGIN.svg`}
						alt="icon-user"
					/>
					</div>
				</Tooltip>
          </NavLink>
        )}
        
				{uid && (
					<NavLink exact to="/Pasantias" className="hidden md:flex">
						<Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Pasantias</h1>}
								placement="bottom"
								arrow>
							<div className="cursor-pointer flex items-center font-md m-3">
								<img
									className="w-8 my-1 mx-4"
									src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/PASANTIAS.svg?alt=media&token=ad0e3032-5d96-4e12-b460-fa9f89b46062"
									alt="icon-user"
								/>
							</div>
						</Tooltip>		
					</NavLink>
				)}
        
				{uid && (
					<NavLink exact to="/Cursos" className="hidden md:flex">
						<Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Cursos</h1>}
								placement="bottom"
								arrow>
							<div className="cursor-pointer flex items-center font-md m-3">
								<img
									className="w-8 my-1 mx-4"
									src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/videos.svg?alt=media&token=d739daee-e602-4f50-bcba-2452596b80dd"
									alt="icon-user"
								/>
							</div>
						</Tooltip>
					</NavLink>
				)}
        
				{uid && (
					<NavLink exact to="/Recursos" className="hidden md:flex">
						<Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Recursos</h1>}
								placement="bottom"
								arrow>
							<div className="iconR cursor-pointer flex items-center">
								<img
									className="w-8 my-2 mx-4"
									src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/APRENDE.svg?alt=media&token=8a764b94-62d4-43a0-88fa-52e8b273f7c3"
									alt="icon-user"
								/>
							</div>
						</Tooltip>		
					</NavLink>
				)}
        
        {uid && (
          <NavLink exact to="/Contactanos" className="hidden md:flex">
				<Tooltip title= {<h1 className = "text-sm font-Poppins text-white" >Contactanos</h1>}
									placement="bottom"
									arrow>
					<div className="cursor-pointer flex items-center font-md m-3">
						<img
							className="w-9 mt-1"
							src="https://res.cloudinary.com/socialacademy/image/upload/v1635888369/Social%20Academy%20Image/icons%20General/CURSOS_ldaubb.svg"
							alt="icon-user"
						/>
					</div>
				</Tooltip>
          </NavLink>
        )}

				{uid && (
					<div className = "hidden md:flex">
						<div className="flex mx-5 pt-5 mb-3 relative right-0 justify-center items-center">
							<img
								src={fotoPerfil}
								alt= "foto perfil"
								className="w-9 rounded-full ring-2 ring-gray-200 drop-shadow-lg shadow-md cursor-pointer"
								onClick={() => setItemModal(!itemModal)}
							/>
							<GridModalItems itemModal={itemModal} setItemModal={setItemModal} />
						</div>
					</div>	
				)}		
			</div>
		</>
	);
};
