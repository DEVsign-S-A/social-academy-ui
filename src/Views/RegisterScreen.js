import React from "react";
import "../Components/UI_Login/style.css";
import { SocialIconsRegister } from "../Components/UI_Login/SocialIconsRegister";
import { useDispatch, useSelector } from "react-redux";
import { setToggleForm } from "../Redux/Actions/uiActions";

const RegisterScreen = ({ props }) => {

  const {toggleForm} = useSelector(state => state.ui);

  const dispatch = useDispatch();

  const handleToggleForm = () => {
    dispatch(setToggleForm(!toggleForm));
  }


  return (
    <>
      <form
        action="index.html"
        id="form"
        autocomplete="off"
        className="sign-up-form"
      >
        <div className="">
          <img
            src={`./assets/Logos/sociallog.svg`}
            alt="sociallog"
            className="w-10/12"
          />
        </div>

        <div className="heading">
          <h2>Empezemos</h2>
          <h6>¿Ya tienes una cuenta?</h6>
          <p
            className="toggle"
            onClick={handleToggleForm}
          >
            Inicia Sesión
          </p>
        </div>

        <div className="actual-form">
          <div className="input-wrap">
            <input
              type="text"
              minlength="4"
              className="input-field"
              autocomplete="off"
              required
              placeholder="Nombre"
            />
          </div>

          <div className="input-wrap">
            <input
              type="email"
              className="input-field"
              autocomplete="off"
              required
              placeholder="Email"
            />
          </div>

          <div className="input-wrap">
            <input
              type="password"
              minlength="4"
              className="input-field"
              autocomplete="off"
              required
              placeholder="Contraseña"
            />
          </div>
          <div className="input-wrap">
            <input
              type="password"
              minlength="4"
              className="input-field"
              autocomplete="off"
              required
              placeholder="Repita su contraseña"
            />
          </div>

          <input type="submit" value="Resgistrate" className="sign-btn" />

          <p className="text">O Registrate Con alguna de estas plataformas</p>

          <SocialIconsRegister />
        </div>
      </form>
    </>
  );
};

export default RegisterScreen;
