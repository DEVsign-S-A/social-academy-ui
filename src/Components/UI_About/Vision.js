import React from "react";
import Team from '../../assets/UI-About/012.png'
export const Vision = () => {
  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>Visión</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex justify-between">
        <div className="mx-10 text-gray-500 text-xl font-Poppins mt-8">
          <p className="letterLine">
            Ser una plataforma referente en Latinoamérica en el ámbito de la
            retroalimentación educativa de los estudiantes tanto universitarios, 
            técnicos y autodidactas. Para complementar sus planes de estudio; además 
            prentende no solo el aumento de la interacción digital por medio de la 
            plataforma, sino también el crecimiento profesional (acceso a cursos profesionales 
            cerficicados por la plataforma) y convertirnos en al plataforma online más prestigiosa.
          </p>
        </div>
        <div className='mr-8'>
            <img
                src={Team}
                alt='Team Working'
                width='1800px'
                className="rounded-3xl shadow-2xl ring-2 ring-gray-200"
                loading='lazy'
            />
        </div>
      </div>
    </>
  );
};
