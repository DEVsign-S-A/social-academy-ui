import React from "react";
import "./style.css";
export const AboutUs = () => {
  return (
    <>
    
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>¿Quienes Somos?</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex items-center flex-col lg:flex-row lg:justify-between ">
      <div>
      <div className='items-center flex justify-center w-48 mt-3 mx-3 lg:mx-10 bg-gray-50 border-2 border-gray-200 lg:flex lg:items-center rounded-full shadow-2xl lg:-mt-28'>
          <img src='https://res.cloudinary.com/socialacademy/image/upload/v1634061697/Social%20Academy%20Image/icons%20General/ICONBLUEACADEM_Y_zzgxof.svg' alt="Logo Social Academy" className='py-6 ml-3'/>
      </div>
      </div>

        <div className="font-Poppins mx-8 mt-3 text-sm text-gray-500 lg:mx-10 lg:text-xl ">
          <p className='letterLine'>
          Social Academy es una plataforma social de retroalimentación
          estudiantil elaborada bajo el lema “Estudiantes ayudando a
          estudiantes” brindando a estos perfiles académicos que, Dividida en
          secciones, cada una de ellas pensada para solucionar los problemas,
          relacionados a la información, más habituales a los que se enfrentan
          los estudiantes universitarios. Dando respuesta a estos por medio de
          nuestra biblioteca virtual, los foros académicos y nuestra sección de
          ofertas de pasantías.
          </p>
        </div>
      </div>
    </>
  );
};
