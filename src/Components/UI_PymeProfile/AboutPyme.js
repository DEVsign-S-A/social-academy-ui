import React from "react";
import { NothingToShow } from "./UserProfileComponents/NothingToShow";
import { UserLabel } from "./UserProfileComponents/UserLabel";

export const AboutPyme = ({ info, Phone, TypeCompany }) => {
  return (
    <div className="flex flex-col justify-center AboutUser">
      <div className="Bio ContenedoresPerfil">
        <h1 className="TitulosPerfil"> Bio</h1>
        {info ? <h3>{info}</h3> : <NothingToShow dato={"decripcion"} />}
      </div>

      <div className="ContenedorHabilidades ContenedoresPerfil">
        <h1 className="TitulosPerfil">Telefono</h1>
        <div className="flex flex-row flex-wrap Abilities">
          {Phone &&(
              <UserLabel dato={Phone} />
            )}
        </div>
      </div>

      <div className="UserLanguages ContenedoresPerfil">
        <h1 className="TitulosPerfil">Tipo de Compañia</h1>
        <div className="flex flex-row flex-wrap Languages">
          {TypeCompany && (
              <UserLabel dato={TypeCompany} />
            )}
        </div>
      </div>
    </div>
  );
};
