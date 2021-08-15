import React from "react";
import Image from "../../assets/UI-About/pexels-fauxels-3182759.jpg";
export const WeDo = () => {
  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>¿Qué hacemos?</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex justify-between">
        <div className="ml-8">
          <img
            src={Image}
            alt="We Do"
            width="1800px"
            className="rounded-3xl shadow-xl ring-2 ring-gray-200"
            loading="lazy"
          />
        </div>
        <div className="mx-10 text-gray-500 text-xl font-Poppins mt-8">
          <p className="letterLine">
            Social Academy ofrece a los estudiantes una biblioteca virtual en la
            que puedan encontrar información, pertinente para ellos y adaptada a
            su contexto, compartida por otros usuarios. Brindando, además,
            cursos que los ayuden a desarrollarse académicamente. Facilitando la
            obtención de asesorías académicas entre usuarios por medio de foros
            académicos.
          </p>
        </div>
      </div>
    </>
  );
};
