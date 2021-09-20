import React from "react";
import { NavLink, Link } from "react-router-dom";
// colocar un icono y nombre correspondiente al link proporcionado o asociado 
          /// al nombre del usuario
export const NavbarAuth = () => {
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
          <Link 
            to="/UserProfile">
            <div className="cursor-pointer flex items-center text-white font-md text-sm p-2">
              <img
                className="w-7 mx-5"
                src={`./assets/ICONS/HOME.svg`}
                alt="icon-user"
              />
            </div>
          </Link>

          <NavLink exact to="/Foros">
            {
              <div className="cursor-pointer flex items-center text-white font-md text-sm p-2">
                <img
                  className="w-7 mx-5"
                  src={`./assets/ICONS/FOROS.svg`}
                  alt="icon-user"
                />
              </div>
            }
          </NavLink>

          <NavLink exact to="/Pasantias">
            {
              <div className="cursor-pointer flex items-center text-white font-md text-sm p-2">
                <img
                  className="w-7 mx-5"
                  src={`./assets/ICONS/CURSOS.svg`}
                  alt="icon-user"
                />
              </div>
            }
          </NavLink>

          <NavLink exact to="/Cursos">
            {
              <div className="cursor-pointer flex items-center text-white font-md text-sm p-2">
                <img
                  className="w-8 mx-5"
                  src={`./assets/ICONS/Pasantias.svg`}
                  alt="icon-user"
                />
              </div>
            }
          </NavLink>

          {
              /* 
                componete oculto
              */
          }
        </div>
      </nav>
    </>
  );
};
