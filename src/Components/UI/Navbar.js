import React from "react";
import { NavLink, Link } from "react-router-dom";

import '../Styles/NavModalTooltip.css'

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-primary overflow-hidden shadow-xl transition-all ease-in-out duration-700">
        <div className="flex text-white font-bold text-2xl m-5">
          Social Academy
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
            <div className="iconN cursor-pointer flex items-center p-2">
              <img
                className="w-7 mx-5"
                src={`./assets/ICONS/HOME.svg`}
                alt="icon-user"
              />
              <div className='tooltip'>Inicio</div>
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
              <div className='tooltip'>Foros</div>
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
                <div className='tooltip'>Cursos</div>
              </div>
            }
          </NavLink>

          <NavLink exact to="/Login">
            {
              <div className="iconL cursor-pointer flex items-center text-white font-md p-2 mt-1">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/LOGIN.svg`}
                  alt="icon-user"
                />
                <div className='tooltip'>Login</div>
              </div>
            }
          </NavLink>

          <NavLink exact to="/Pasantias">
            {
              <div className="iconP cursor-pointer flex items-center">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/PASANTIAS.svg`}
                  alt="icon-user"
                />
                <div className='tooltip'>Pasantias</div>
              </div>
            }
          </NavLink>

          <NavLink exact to="/Cursos">
            {
              <div className="iconC cursor-pointer flex items-center">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/Filter.svg`}
                  alt="icon-user"
                />
                <div className='tooltip'>Cursos</div>
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
                <div className='tooltip'>Aprende</div>
              </div>
            }
          </NavLink>
        </div>
      </nav>
    </>
  );
};
