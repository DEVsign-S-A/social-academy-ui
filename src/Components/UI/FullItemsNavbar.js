import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

export const FullItemsNavbar = () => {
    const { uid } = useSelector((state) => state.auth);


    return (
        <>
        <div className=" w-full h-screen">
        {!uid && (
            <div className="md:flex">
                <Link to="/">
                    <div className="cursor-pointer flex items-center p-2 relavite">
                        <img
                            className="w-10 mx-5 my-3"
                            src={`./assets/ICONS/HOME.svg`}
                            alt="icon-user"
                        />
                        <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Inicio</p>
                    </div>
                </Link>
            </div>
        )}

        <div>
            {!uid && (
                <NavLink exact to="/About" className="md:flex">
                    <div className="iconA cursor-pointer flex items-center font-md p-2 mt-2">
                        <img
                            className="w-10 mx-5 my-3"
                            src={`./assets/ICONS/CURSOS.svg`}
                            alt="icon-user"
                        />
                        <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Quienes Somos</p>
                    </div>
                </NavLink>
            )}
        </div>
        {!uid && (
            <NavLink exact to="/Login" className="md:flex">
                <div className="iconL cursor-pointer flex items-center font-md p-2 mt-1">
                    <img
                        className="w-10 mx-5 my-5"
                        src={`./assets/ICONS/LOGIN.svg`}
                        alt="icon-user"
                    />
                    <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Inicio de Sesión</p>

                </div>
            </NavLink>
        )}

        <NavLink exact to="/Foros" className="md:flex">
            <div className="iconF cursor-pointer flex items-center p-2">
                <img
                    className={`${uid ? "w-10 my-4 mx-5" :  "w-10 mx-5 my-4"}`}
                    src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/FOROS.svg?alt=media&token=f616856e-d5e7-4171-8207-3393de584ccf"
                    alt="icon-user"
                />
                <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Foros Academicos</p>

            </div>
        </NavLink>

        {uid && (
            <NavLink exact to="/Pasantias" className="md:flex">
                <div className="iconP cursor-pointer flex items-center font-md p-1 mt-2">
                    <img
                        className="w-10 my-4 mx-5"
                        src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/PASANTIAS.svg?alt=media&token=ad0e3032-5d96-4e12-b460-fa9f89b46062"
                        alt="icon-user"
                    />
                <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Pasantias</p>

                </div>
            </NavLink>
        )}
        {uid && (
            <NavLink exact to="/Cursos" className="md:flex">
                <div className="iconR cursor-pointer flex items-center font-md p-2 mt-2">
                    <img
                        className="w-10 my-4 mx-5"
                        src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/videos.svg?alt=media&token=d739daee-e602-4f50-bcba-2452596b80dd"
                        alt="icon-user"
                    />
                <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Cursos</p>

                </div>
            </NavLink>
        )}
        {uid && (
            <NavLink exact to="/Recursos" className="md:flex">
                <div className="iconR cursor-pointer flex items-center">
                    <img
                        className="w-10 my-4 mx-5"
                        src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/APRENDE.svg?alt=media&token=8a764b94-62d4-43a0-88fa-52e8b273f7c3"
                        alt="icon-user"
                    />
                <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Recursos</p>

                </div>
            </NavLink>
        )}
        {uid && (
            <NavLink exact to="/MyProfile/:userId" className="md:flex">
                <div className="iconR cursor-pointer flex items-center">
                    <img
                        className="w-10 mx-5 my-4"
                        src="https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/HOME.svg?alt=media&token=295eee38-661b-4272-aa2c-6ec0df50759b"
                        alt="icon-user"
                    />
                    <p className='text-WhiteSocial font-Poppins font-semibold text-xl'>Mi Perfil</p>

                </div>
            </NavLink>
        )}
    </div>
        </>
    )
}
