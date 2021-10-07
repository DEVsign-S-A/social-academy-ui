import React from "react";
// import moment from 'moment';

export const PymeInfo = ({
  CompanyName,
  ProfilePhoto,
  Direction,
  Cellphone,
  SectorComercial,
  email,
}) => {
  const nombreUsuario = CompanyName;
  const fotoPerfil = ProfilePhoto;
  const carrera = SectorComercial;
  const direccion = Direction;
  const telefono = Cellphone;
  const correo = email;

  // const annos = moment().diff(fechaNacimiento, 'years', false);

  return (
    <div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
      <img src={fotoPerfil} alt="Foto de Perfil" className="UserImage" />

      <div className="flex flex-col justify-center items-center">
        <h1>{nombreUsuario}</h1>

        <h3>{carrera}</h3>

        <div className="UserInformation">
          {/* <h4><b>Edad:</b> {annos} años </h4> */}
          <h4>
            <b>Dirección:</b> {direccion}
          </h4>
          <h4>
            <b>Telefono:</b> {telefono}
          </h4>
          <h4>
            <b>Correo:</b> {correo}
          </h4>
        </div>

        <div className="UserSocialMedia flex flex-row justify-around"></div>
      </div>
    </div>
  );
};
