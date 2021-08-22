import React, { useState } from "react";
import { FormPerson } from "./FormPerson";
<<<<<<< HEAD
import { FormCompany } from "./FormCompany";
=======
>>>>>>> 6ad3ea5fed0ece44cc225918663844bb97e3ec46
import "./style.css";

import CENTNACIN from "../../assets/UI-About/CENTNACIN.png";
import MEFCCA from "../../assets/UI-About/MEFCCA.png";
import LogoCNU from "../../assets/UI-About/LogoCNU.png";
import INATEC from "../../assets/UI-About/INATEC.png";
<<<<<<< HEAD

=======
import { FormCompany } from "./FormCompany";
>>>>>>> 6ad3ea5fed0ece44cc225918663844bb97e3ec46

export const FormContact = () => {
  const [radioBtn, setRadioBtn] = useState(1);

  const handleCheck = (e) => {
    setRadioBtn(e.target.value);
  };
  return (
<<<<<<< HEAD
    <div className="mt-20 -mb-14">
      <section className="content-image2">
        <div className="flex justify-between root">
          {radioBtn === "1" ? <FormPerson /> : <FormCompany />}

          <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-8 items-center justify-center">
            <img src={CENTNACIN} alt="CENTNACIN" className="w-28" />
            <img src={MEFCCA} alt="MEFCCA" className="w-28" />
            <img src={LogoCNU} alt="LogoCNU" className="w-36" />
=======
    <div className="mt-20">
      <section className="content-image2">
        <div className="flex justify-between root">
        
          {radioBtn === "1" ? <FormPerson /> : <FormCompany />}

          <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-8">
            <img src={CENTNACIN} alt="CENTNACIN" className="w-28" />
            <img src={MEFCCA} alt="MEFCCA" className="w-28" />
            <img src={LogoCNU} alt="LogoCNU" className="w-28" />
>>>>>>> 6ad3ea5fed0ece44cc225918663844bb97e3ec46
            <img src={INATEC} alt="INATEC" className="w-28" />
          </div>
        </div>

<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center">
          {/*
           * radio Buttons
           */}
          <div className="root flex">
            <div className="flex mx-5 items-center justify-center">
              <p
                className='text-gray-500 mx-2 font-medium text-lg'
              >Persona</p>
              <input
                id="radio1"
                type="radio"
                value="1"
                checked={radioBtn === "1" ? true : false}
                onChange={handleCheck}
                className='cursor-pointer'

              />
            </div>

            <div className="flex mx-5 items-center justify-center">
              <p
                className='text-gray-500 mx-2 font-medium text-lg'
              >Empresa</p>
              <input
                id="radio1"
                type="radio"
                value="2"
                checked={radioBtn === "2" ? true : false}
                onChange={handleCheck}
                className='cursor-pointer'
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
=======
        {/*
         * radio Buttons
         */}
        <div className="root flex">
          <div className="flex">
            <p>Persona</p>
            <input
              id="radio1"
              type="radio"
              value="1"
              checked={radioBtn === "1" ? true : false}
              onChange={handleCheck}
            />
          </div>

          <div className="flex">
            <p>Empresa</p>
            <input
              id="radio1"
              type="radio"
              value="2"
              checked={radioBtn === "2" ? true : false}
              onChange={handleCheck}
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
>>>>>>> 6ad3ea5fed0ece44cc225918663844bb97e3ec46
        </div>
      </section>
    </div>
  );
};
