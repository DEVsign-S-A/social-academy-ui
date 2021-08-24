import React from "react";
import Logo from '../../assets/UI-About/Social-academy-logo1.svg'
import "./style.css";
export const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>Quienes Somos</h2>
        <div className="section-title"></div>
      </div>
      <div className="flex justify-between">
      <div>
      <div className='mx-10 bg-gray-50 border-2 border-gray-200 flex items-center rounded-full shadow-2xl -mt-28'>
          <img src={Logo} alt="Logo Social Academy" className='LogoImg py-16 px-6'/>
      </div>
      </div>

        <div className="mx-10 text-gray-500 text-xl font-Poppins">
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