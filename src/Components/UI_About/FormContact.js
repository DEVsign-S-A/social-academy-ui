import React, { useState } from "react";
import { FormPerson } from "./FormPerson";
import { FormCompany } from "./FormCompany";
import "./style.css";

export const FormContact = () => {
  const [radioBtn, setRadioBtn] = useState(1);

  const handleCheck = (e) => {
    setRadioBtn(e.target.value);
  };
  return (
    <div className="mt-20 -mb-14 select-none transition-all duration-500 ease-linear">
      <section className="content-image2 transition-all duration-500 ease-linear">
        <div className="flex items-center justify-between root flex-col lg:flex-row">
          {radioBtn === "1" ? <FormPerson /> : <FormCompany />}
        <br/>
          <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-8 items-center justify-center">
            <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/Aliados/CENTNACIN_mnhdht.png`} alt="CENTNACIN" className="w-28" />
            <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/Aliados/MEFCCA_bfo9yq.png`} alt="MEFCCA" className="w-28" />
            <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442079/Social%20Academy%20Image/Aliados/LogoCNU_kxmlwo.png`} alt="LogoCNU" className="w-36" />
            <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/Aliados/INATEC_ncynrc.png`} alt="INATEC" className="w-28" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/*
           * radio Buttons
           */}
          <div className="root flex">
            <div className="flex mx-5 items-center justify-center">
              <p className="text-gray-500 mx-2 font-medium text-lg">Persona</p>
              <input
                id="radio1"
                type="radio"
                value="1"
                checked={radioBtn === "1" ? true : false}
                onChange={handleCheck}
                className="cursor-pointer outline-none"
              />
            </div>

            <div className="flex mx-5 items-center justify-center">
              <p className="text-gray-500 mx-2 font-medium text-lg">Empresa</p>
              <input
                id="radio1"
                type="radio"
                value="2"
                checked={radioBtn === "2" ? true : false}
                onChange={handleCheck}
                className="cursor-pointer outline-none"
              />
            </div>
          </div>

          <div className="root mt-16 text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
            <h2>¿Deseas hablar con nosotros?</h2>
            <div className="section-title"></div>
            <br />
            <p className="font-Poppins font-medium text-lg text-gray-500">
              Nuestro equipo estará encantado de resoponder a sus preguntas.
              <br />
              Completa el formualrio y nos pondremos en contacto lo ants posible
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
