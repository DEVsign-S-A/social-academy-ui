import React, { useState } from "react";
import "../Components/UI_Login/login.css";
import RegisterScreen from "./RegisterScreen";

const LoginScreen = () => {
  const [toggle, setToggle] = useState(true);

  const toggleClass = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={toggle ? "containerSing" : "containerSing sign-up-mode"}>
        <div className="forms-containerSing ">
          <div className="signin-signup">
            <form id="form" action="#" className="sign-in-form">
              <h2 className="title font-Montserrat">Inicia Sesión</h2>
              <div className="input-field font-Poppins">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  placeholder="Correo Electronico"
                  id="email"
                  name="email"
                  className="font-Poppins font-medium"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  className="font-Poppins font-medium"
                />
              </div>
              <input type="submit" value="Inicia" className="btnSing solid" />
            </form>

            <RegisterScreen />
          </div>
        </div>

        <div className="panels-containerSing">
          <div className="panel left-panel">
            <div className="content">
              <h3 className="font-Montserrat">¿Eres Nuevo(a)?</h3>
              <p className="font-Poppins font-medium">
                ¡QUE ESPERAS! <br />
                Para formar parte de la comunidad de aprendizaje mas grande de
                Nicaragua dando y recibiendo Feedback
              </p>
              <button
                className="btnSing transparent"
                id="sign-up-btn"
                onClick={toggleClass}
              >
                Registrate
              </button>
            </div>
            <img src={`./assets/love01.svg`} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3 className="font-Montserrat">¿Ya tienes Cuenta?</h3>
              <p className='font-Poppins font-medium'>
                Inicia Sesion ya, para empezar a comunicarte con muchos Jovenes
                que desean aprender y enseñar al igual que tu.
              </p>
              <button
                className="btnSing transparent"
                id="sign-in-btn"
                onClick={toggleClass}
              >
                Inicia
              </button>
            </div>
            <img src={`./assets/love02.svg`} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
