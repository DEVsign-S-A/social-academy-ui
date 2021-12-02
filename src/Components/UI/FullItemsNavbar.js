import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../Redux/Actions/authActions";
import { setToggleNavbar } from "../../Redux/Actions/uiActions";

export const FullItemsNavbar = () => {
  const { uid } = useSelector((state) => state.auth);
  const { toggleNavbar } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setToggleNavbar(!toggleNavbar));
  };

	const handleLogout = async (e) =>{
		e.preventDefault();
        await dispatch(startLogout());
        localStorage.removeItem('lastPath');
    }
	return (
		<>
			<div className=" w-full h-screen animate__animated animate__fadeInLeft">
				{!uid && (
					<div className="md:flex">
						<Link to="/">
							<div
								className="cursor-pointer flex items-center p-2 relavite"
								onClick={handleClose}
							>
								<img
									className="w-10 mx-5 my-3"
									src={`./assets/ICONS/HOME.svg`}
									alt="icon-user"
								/>
								<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
									Inicio
								</p>
							</div>
						</Link>
					</div>
				)}

				<div>
					{!uid && (
						<NavLink exact to="/About" className="md:flex">
							<div
								className="iconA cursor-pointer flex items-center font-md p-2 mt-2"
								onClick={handleClose}
							>
								<img
									className="w-10 mx-5 my-3"
									src={`./assets/ICONS/CURSOS.svg`}
									alt="icon-user"
								/>
								<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
									Quienes Somos
								</p>
							</div>
						</NavLink>
					)}
				</div>

				<NavLink exact to="/Foros" className="md:flex">
					<div
						className="iconF cursor-pointer flex items-center p-2"
						onClick={handleClose}
					>
						<img
							className={`${uid ? "w-10 my-4 mx-5" : "w-10 mx-5 my-4"}`}
							src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/FOROS.svg?alt=media&token=f616856e-d5e7-4171-8207-3393de584ccf"
							alt="icon-user"
						/>
						<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
							Foros Academicos
						</p>
					</div>
				</NavLink>

				{uid && (
					<NavLink exact to="/Pasantias" className="md:flex">
						<div
							className="iconP cursor-pointer flex items-center font-md p-1 mt-2"
							onClick={handleClose}
						>
							<img
								className="w-10 my-4 mx-5"
								src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/PASANTIAS.svg?alt=media&token=ad0e3032-5d96-4e12-b460-fa9f89b46062"
								alt="icon-user"
							/>
							<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
								Pasantias
							</p>
						</div>
					</NavLink>
				)}
        
				{uid && (
					<NavLink exact to="/Cursos" className="md:flex">
						<div
							className="iconR cursor-pointer flex items-center font-md p-2 mt-2"
							onClick={handleClose}
						>
							<img
								className="w-10 my-4 mx-5"
								src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/videos.svg?alt=media&token=d739daee-e602-4f50-bcba-2452596b80dd"
								alt="icon-user"
							/>
							<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
								Cursos
							</p>
						</div>
					</NavLink>
				)}
        
				{uid && (
					<NavLink exact to="/Recursos" className="md:flex">
						<div
							className="iconR cursor-pointer flex items-center"
							onClick={handleClose}
						>
							<img
								className="w-10 my-4 mx-5"
								src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/APRENDE.svg?alt=media&token=8a764b94-62d4-43a0-88fa-52e8b273f7c3"
								alt="icon-user"
							/>
							<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
								Recursos
							</p>
						</div>
					</NavLink>
				)}
        
        {uid && (
          <NavLink exact to="/Contactanos" className="md:flex">
            <div
              className="iconA cursor-pointer flex items-center font-md p-2 mt-2"
              onClick={handleClose}
            >
              <img
                className="w-10 mx-5 my-3"
                src={`./assets/ICONS/CURSOS.svg`}
                alt="icon-user"
              />
              <p className="text-WhiteSocial font-Poppins font-semibold text-xl">
                Contactanos
              </p>
            </div>
          </NavLink>
        )}
        
				{!uid && (
					<NavLink exact to="/Login" className="md:flex">
						<div
							className="iconL cursor-pointer flex items-center font-md p-2 mt-1"
							onClick={handleClose}
						>
							<img
								className="w-10 mx-5 my-5"
								src={`./assets/ICONS/LOGIN.svg`}
								alt="icon-user"
							/>
							<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
								Inicio de Sesión
							</p>
						</div>
					</NavLink>
				)}
        
				{uid && (
					<NavLink exact to="/MyProfile" className="md:flex">
						<div
							className="iconR cursor-pointer flex items-center"
							onClick={handleClose}
						>
							<img
								className="w-10 mx-5 my-4"
								src={`https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/IconProfile.png?alt=media&token=bb0f201d-30eb-4094-bfbf-a05c553e80ec`}
								alt="my profile"
							/>
							<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
								Mi Perfil
							</p>
						</div>
					</NavLink>
				)}
        
				{uid && (
					<button className="md:flex"
						onClick = {handleLogout} >
						<div
							className="iconR cursor-pointer flex items-center"
							onClick={handleClose}
						>
							<img
								className="w-10 mx-5 my-4"
								src= {`https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/IconLog.png?alt=media&token=0d50c618-e895-4012-8884-d1dd3b55ffb0`}
								alt="logout"
							/>
							<p className="text-WhiteSocial font-Poppins font-semibold text-xl">
								Cerrar Sesión
							</p>
						</div>
					</button>
				)}
			</div>
		</>
	);
};
