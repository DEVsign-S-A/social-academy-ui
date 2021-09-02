import React from "react";
export const WeDo = () => {
  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>¿Qué hacemos?</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex items-center mx-10 justify-around flex-col lg:flex-row">
        <div className="lg:ml-8 ml-0 ">
          <img
            src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442079/Social%20Academy%20Image/pexels-fauxels-3182759_lrnteg.jpg`}
            alt="We Do"
            width="1800px"
            className="rounded-3xl shadow-xl ring-2 ring-gray-200"
            loading="lazy"
          />
        </div>
        <div className="lg:mx-10 text-gray-500 lg:text-xl font-Poppins lg:mt-8 text-sm mt-1">
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
