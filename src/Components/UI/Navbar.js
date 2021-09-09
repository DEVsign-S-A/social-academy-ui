import React from "react";
import { NavLink, Link } from "react-router-dom";

import '../Styles/NavModalTooltip.css'

export const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full top-0 z-50 select-none flex items-center justify-between flex-wrap bg-primary overflow-hidden shadow-xl transition-all ease-in-out duration-700">
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

        <div className="hidden md:flex transition-all ease-in-out duration-700">
          <Link to="/Inicio">
            <div className="iconI cursor-pointer flex items-center p-2">
              <img
                className="w-7 mx-5"
                src={`./assets/ICONS/HOME.svg`}
                alt="icon-user"
              />
              <div className='absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip'>
                <div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
                Inicio
              </div>
            </div>
          </Link>

          <NavLink exact to="/Foros">
            {
              <div className="iconF cursor-pointer flex items-center p-2">
                <img
                  className="w-7 mx-5"
                  src={`./assets/ICONS/FOROS.svg`}
                  alt="icon-user"
                />
              <div className='absolute transition-all duration-500 ease-in-out bg-white rounded-xl z-50  shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip'>
                <div className="bg-white pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 z-50"></div>
                Foros
              </div>
              </div>
            }
          </NavLink>

          <NavLink exact to="/About">
            {
              <div className="iconA cursor-pointer flex items-center font-md p-2 mt-2">
                <img
                  className="w-7 mx-5"
                  src={`./assets/ICONS/CURSOS.svg`}
                  alt="icon-user"
                />
                <div className='absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip'>
                  <div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
                  About
                </div>               
              </div>
            }
          </NavLink>

          <NavLink exact to="/Login">
            {
              <div className="iconL cursor-pointer flex items-center font-md p-2 mt-1">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/LOGIN.svg`}
                  alt="icon-user"
                />
               <div className='absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 ml-1 text-xs px-4 py-2 pointer-events-none tooltip'>
                  <div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
                  Login
                </div>               
              </div>
            }
          </NavLink>

          <NavLink exact to="/Pasantias" >
            {
              <div className="iconP cursor-pointer flex items-center font-md p-1 mt-2">
                <img
                  className="w-6 mx-5"
                  src={`./assets/ICONS/PASANTIAS.svg`}
                  alt="icon-user"
                />
                
                <div className='absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-2 text-xs px-4 py-2 pointer-events-none tooltip'>
                  <div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-2/4 transform -translate-x-2/4 rotate-45 "></div>
                  Pasantias
                </div>
              </div>
            }
          </NavLink>

          <NavLink exact to="/Cursos">
            {
              <div className="iconR cursor-pointer flex items-center font-md p-2 mt-2">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/videos.svg`}
                  alt="icon-user"
                />
               <div className='absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-3 text-xs px-4 py-2 pointer-events-none tooltip'>
                  <div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-12 transform -translate-x-2/4 rotate-45 "></div>
                  Cursos
                </div>
              </div>
            }
          </NavLink>
          <NavLink exact to="/Recursos">
            {
              <div className="iconR cursor-pointer flex items-center">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/APRENDE.svg`}
                  alt="icon-user"
                />
               <div className='absolute z-50 transition-all duration-500 ease-in-out bg-white rounded-xl shadow-xl mt-24 opacity-0 -ml-3 text-xs px-4 py-2 pointer-events-none tooltip'>
                  <div className="bg-white z-50 pointer-events-none  absolute h-3 w-3 -mt-3 left-12 transform -translate-x-2/4 rotate-45 "></div>
                  Recursos
                </div>
              </div>
            }
          </NavLink>
        </div>
      </nav>
    </>
  );
};
