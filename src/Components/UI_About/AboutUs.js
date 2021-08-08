import React from "react";
import Logo from '../../assets/UI-About/Social-academy-logo1.svg'
export const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <div className="text-center font-bold text-xl text-gray-800 my-5">
        <h2>Quienes Somos</h2>
        <div className="section-title"></div>
      </div>
      <div className="flex flex justify-between">
      <div className='mx-10 bg-gray-100 flex items-center py-10 rounded-full shadow-2xl -mt-16'>
          <img src={Logo} alt="Logo Social Academy" className='LogoImg'/>
      </div>
        <div className="mx-10 text-gray-500 text-xl">
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
