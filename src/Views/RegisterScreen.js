import React from "react";
import "../Components/UI_Login/style.css";
import { SocialIconsRegister } from "../Components/UI_Login/SocialIconsRegister";
import { useDispatch, useSelector } from "react-redux";
import { setToggleForm } from "../Redux/Actions/uiActions";

import validator from 'validator';
import { useForm } from "../Hook/useForm";
import { startRegisterWithEmailPasswordName } from "../Redux/Actions/authActions";
import { removeError, setError } from "../Redux/Actions/loadActions";

const RegisterScreen = ({ props }) => {

  const dispatch = useDispatch();

  const {toggleForm} = useSelector(state => state.ui);

  const handleToggleForm = () => {
    dispatch(setToggleForm(!toggleForm));
  }

  const {msgError} = useSelector(state => state.load)

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2} = formValues;

  const handleRegister = (e)=>{
    e.preventDefault();
    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }
  }

  const isFormValid = ()=>{
    if(name.trim().length === 0){
      dispatch(setError('Ingrese un nombre'));
      return false;
    }else if(!validator.isEmail(email)){
        dispatch(setError('Email inválido'));
        return false;
    }else if(password.length < 6){
        dispatch(setError('La contraseña debe tener al menos 6 carácteres'));
        return false;
    }else if(password !== password2){
        dispatch(setError('Ambas contraseñas deben ser iguales'));
        return false;
    }
    dispatch(removeError());
    return true;
  }


  return (
    <>
      <form
        action="index.html"
        id="form"
        autocomplete="off"
        className="sign-up-form"
        onSubmit = {handleRegister}
      >

        <div className="">
          <img
            src={`./assets/Logos/sociallog.svg`}
            alt="sociallog"
            className="w-10/12"
          />
        </div>

        <div className="heading">
          <h2>Empecemos</h2>

          {  msgError &&
            <div className= "alert-error">
                {msgError}
            </div>
          }
            
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
              name = "name"
              value = {name}
              onChange = {handleInputChange}
            />
          </div>

          <div className="input-wrap">
            <input
              type="email"
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
          <div className="input-wrap">
            <input
              type="password"
              minlength="4"
              className="input-field"
              autocomplete="off"
              required
              placeholder="Repita su contraseña"
              name = "password2"
              value = {password2}
              onChange = {handleInputChange}
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
