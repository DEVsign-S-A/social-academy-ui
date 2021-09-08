import React, { useState } from "react";
import './style.css';
import im01 from '../../assets/UI_Login/image1.png';
import im02 from '../../assets/UI_Login/image2.png';
import im03 from '../../assets/UI_Login/image3.png';
import { SocialIcons } from "./SocialIcons";
import { SocialIconsRegister } from "./SocialIconsRegister";

export const LoginView = () => {

  const [singform, setSingform] = useState(true);
  
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
  

  return (
    <>
      <div
        id='main'
      className={`${singform ? 'sign-in-form' : 'sign-up-mode'}`}
      >
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" autocomplete="off" className="sign-in-form"
              id='form'
            >
              <div className="">
                <img src={`./assets/Logos/sociallog.svg`} alt="sociallog" 
                  className='w-10/12'
                />
              </div>

              <div className="heading">
                <h2 className='text-second'>Bienvenido</h2>
                <h6>¿Todavía no estas registrado?</h6>
                <p className="toggle"
                  onClick={() => setSingform(!singform)}
                >Registrate</p>
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

                <input type="submit" value="Inicia" className="sign-btn" />
                <p
                className="text"
              >O Inicia Sesión Con alguna de estas plataformas</p>
                <SocialIcons/>

                <p className="text">
                  ¿Olvidaste tu contraseña?
                  <p
                  >Consigue ayuda</p> iniciando sesión
                </p>
              </div>
            </form>

            <form action="index.html" 
              id='form'
            autocomplete="off" className="sign-up-form">
              <div className="">
                <img src={`./assets/Logos/sociallog.svg`} alt="sociallog" 
                  className='w-10/12'
                />
              </div>


              <div className="heading">
                <h2>Empezemos</h2>
                <h6>¿Ya tienes una cuenta?</h6>
                <p className="toggle"
                      onClick={() => setSingform(!singform)}
                >Inicia Sesión</p>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                    placeholder='Nombre'
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
                    placeholder='Contraseña'
                  />
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                    placeholder='Repita su contraseña'
                  />
                </div>

                <input type="submit" value="Resgistrate" className="sign-btn" />

                <p className='text'>
                O Registrate Con alguna de estas plataformas
                </p>

                <SocialIconsRegister/>

              </div>
            </form>
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
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your className</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1"
                
                ></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
