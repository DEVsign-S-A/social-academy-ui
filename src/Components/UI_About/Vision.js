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
            Convertirnos en una plataforma referente en Latinoamérica en el
            ámbito de la retroalimentación entre estudiantes siendo utilizada
            por universidades para complementar los planes de estudios de
            estudiantes y brindando a estos accesos a cursos profesionales
            certificados por las plataformas de aprendizaje online más
            prestigiosas de la región.
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
