import React from "react";
import "../Components/UI_Login/login.css";
import { SocialIconsRegister } from "../Components/UI_Login/SocialIconsRegister";
import { PSocial } from "../Components/Tailwind/LoginTW";

const RegisterScreen = ({ props }) => {
  return (
    <>
      <form id="form" action="#" className="sign-up-form">
        <h2 className="title font-Montserrat">Registrate</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            id="nombreAccount"
            name="nombre"
            className="font-Poppins font-medium"
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            id="emailAccount"
            name="email"
            className="font-Poppins font-medium"
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Contraseña"
            id="passwordAccount"
            name="password"
            className="font-Poppins font-medium"
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Repita la Contraseña"
            id="confirm"
            name="confirm"
            className="font-Poppins font-medium"
          />
        </div>
        <div className="input-field">
          <i className="fas fa-calendar"></i>
          <input type="date" placeholder="Fecha de Nacimiento" />
        </div>
        <input type="submit" className="btnSing" value="Registrar" />
        <PSocial $SocialIconsText>
          O Registrate Con alguna de estas plataformas
        </PSocial>
        <SocialIconsRegister />
      </form>
    </>
  );
};

export default RegisterScreen;
