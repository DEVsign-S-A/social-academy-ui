import React from "react";
import Team from '../../assets/UI-About/012.png'
export const Vision = () => {
  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>Visión</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex justify-between m-5 flex-col lg:flex-row">
        <div className="mx-10 text-gray-500 lg:text-xl font-Poppins mt-8 text-sm">
          <p className="letterLine">
            Ser una plataforma referente en Latinoamérica en el ámbito de la
            retroalimentación educativa de los estudiantes tanto universitarios, 
            técnicos y autodidactas. Para complementar sus planes de estudio; además 
            prentende no solo el aumento de la interacción digital por medio de la 
            plataforma, sino también el crecimiento profesional (acceso a cursos profesionales 
            cerficicados por la plataforma) y convertirnos en al plataforma online más prestigiosa.
          </p>
        </div>
        <div className='lg:mr-8 mt-2 mx-2'>
        <br/>
        <br/>
            <img
                src={Team}
                alt='Team Working'
                width='2800px'
                className="rounded-3xl shadow-2xl ring-2 ring-gray-200"
                loading='lazy'
            />
        </div>
      </div>
    </>
  );
};
