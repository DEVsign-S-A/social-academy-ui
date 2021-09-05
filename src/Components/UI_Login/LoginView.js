import React, { useState } from "react";
import './style.css';

export const LoginView = () => {

  const inputs = document.querySelectorAll(".input-field");
  const toggle_btn = document.querySelectorAll(".toggle");
  const main = document.querySelector("main");
  const bullets = document.querySelectorAll(".bullets span");
  const images = document.querySelectorAll(".image");

  inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
      inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
      if (inp.value !== "") return;
      inp.classList.remove("active");
    });
  });

  toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      main.classList.toggle("sign-up-mode");
    });
  });

  function moveSlider() {
    let index = this.dataset.value;

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
      <div className='main'>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form
                action="index.html"
                autocomplete="off"
                className="sign-in-form"
              >
                <div className="logo">
                  <img src="./img/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>
                  <p href="#" className="toggle">
                    Sign up
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
                      placeholder='Correo Electronico'
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

                  <input type="submit" value="Sign In" className="sign-btn" />

                  <p className="text">
                    Forgotten your password or you login datails?
                    <p href="#">Get help</p> signing in
                  </p>
                </div>
              </form>

              <form
                action="index.html"
                autocomplete="off"
                className="sign-up-form"
              >
                <div className="logo">
                  <img src="./img/logo.png" alt="easyclass" />
                  <h4>easyclass</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <p href="#" className="toggle">
                    Sign in
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
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-field"
                      autocomplete="off"
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      className="input-field"
                      autocomplete="off"
                      required
                    />
                    <label>Password</label>
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
                <img
                  src="./img/image1.png"
                  className="image img-1 show"
                  alt=""
                />
                <img src="./img/image2.png" className="image img-2" alt="" />
                <img src="./img/image3.png" className="image img-3" alt="" />
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
