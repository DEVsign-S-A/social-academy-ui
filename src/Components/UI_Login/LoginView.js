import React, { useState } from "react";
import './style.css';
import im01 from '../../assets/UI_Login/image1.png';
import im02 from '../../assets/UI_Login/image2.png';
import im03 from '../../assets/UI_Login/image3.png';

export const LoginView = () => {

  const [singform, setSingform] = useState(true);
  
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
              <div className="logo">
                <img src="./img/logo.png" alt="easyclass" />
                <h4>easyclass</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <p className="toggle"
                  onClick={() => setSingform(!singform)}
                >Sign up</p>
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

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password or you login datails?
                  <p
                  >Get help</p> signing in
                </p>
              </div>
            </form>

            <form action="index.html" 
              id='form'
            autocomplete="off" className="sign-up-form">
              <div className="logo">
                <img src="./img/logo.png" alt="easyclass" />
                <h4>easyclass</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <p className="toggle"
                      onClick={() => setSingform(!singform)}
                >Sign in</p>
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

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <p>Terms of Services</p> and
                  <p>Privacy Policy</p>
                </p>
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
                <span className="active" data-value="1"></span>
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
