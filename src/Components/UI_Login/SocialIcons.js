import React from "react";
import { BtnSocialIcon } from "../Tailwind/LoginTW";

export const SocialIcons = () => {

    //TODO: Crear el Dispatch

  return (
    <div className="flex justify-center items-center my-2">
      <BtnSocialIcon $Red>
        <i className="fab fa-google"></i>
      </BtnSocialIcon>
      <BtnSocialIcon $Blue>
        <i className="fab fa-facebook-f"></i>
      </BtnSocialIcon>
      <BtnSocialIcon $Red>
      <i className="fab fa-twitter"></i>
      </BtnSocialIcon>
      <BtnSocialIcon $Blue>
        <i className="fab fa-microsoft"></i>
      </BtnSocialIcon>
      <BtnSocialIcon $Red>
        <i className="fab fa-github"></i>
      </BtnSocialIcon>
    </div>
  );
};
