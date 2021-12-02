import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Components/UI_Login/style.css";
import im01 from "../assets/UI_Login/image1.png";
import im02 from "../assets/UI_Login/image2.png";
import im03 from "../assets/UI_Login/image3.png";
import { SocialIconsRegister } from "../Components/UI_Login/SocialIconsRegister";
import { Footer } from "../Components/UI_Footer/Footer";
import RegisterScreen from "./RegisterScreen";
import { setToggleForm } from "../Redux/Actions/uiActions";
import { useForm } from "../Hook/useForm";
import { startLoginEmailPassword } from "../Redux/Actions/authActions";


const LoginScreen = () => {
/**
 * Aqui esta una parte que me vale verga si esta en vaniallaJS
 * no pienso quitarme la vida haciendo algo inútil como quitar
 * y agregar clases...
 */
  const bullets = document.querySelectorAll(".bullets span");
  const images = document.querySelectorAll(".image");

  function moveSlider() {
    let index = this.dataset.value || "1";

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
  }

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
  });
  
  //...aqui termina

  const {toggleForm} = useSelector(state => state.ui);

  const handleToggleForm = () => {
    dispatch(setToggleForm(!toggleForm));
  }

  const dispatch = useDispatch();

  //const {loading} = useSelector(state => state.load);
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const {email, password} = formValues;

  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  }

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div
        id="main"
        className={`${toggleForm ? "sign-in-form" : "sign-up-mode"}`}
      >
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form
                action="index.html"
                autocomplete="off"
                className="sign-in-form"
                id="form"
                onSubmit = {handleLogin}
              >
                <div className="">
                  <img
                    src={`./assets/Logos/sociallog.svg`}
                    alt="sociallog"
                    className="w-10/12"
                  />
                </div>

                <div className="heading">
                  <h2 className="text-second">Bienvenido</h2>
                  <h6>¿Todavía no estas registrado?</h6>
                  <p className="toggle" onClick={handleToggleForm}>
                    Registrate
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
                      placeholder="Email"
                      name = "email"
                      value = {email}
                      onChange = {handleInputChange}
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
                      name = "password"
                      value = {password}
                      onChange = {handleInputChange}
                    />
                  </div>

                  <input type="submit" value="Inicia" className="sign-btn" />

                  <p className="text">
                    O Inicia Sesión Con alguna de estas plataformas
                  </p>
                  <SocialIconsRegister />
                  <p className="text">
                    ¿Olvidaste tu contraseña?
                    <p>Consigue ayuda</p> iniciando sesión
                  </p>
                </div>
              </form>

              <RegisterScreen />
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img src={im01} className="image img-1 show" alt="" />
                <img src={im02} className="image img-2" alt="" />
                <img src={im03} className="image img-3" alt="" />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Crea tus propios cursos</h2>
                    <h2>Resuelve tus dudas puntuales</h2>
                    <h2>Busca posibles pasantias</h2>
                  </div>
                </div>

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LoginScreen;
