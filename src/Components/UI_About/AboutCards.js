import React, { useState } from "react";
import Presentation from "../../assets/UI-About/Presentation.svg";
import Evaluation from "../../assets/UI-About/Evaluation.svg";
import Diploma from "../../assets/UI-About/Diploma.svg";
import Rating from "../../assets/UI-About/Rating.svg";
import "./style.css";
export const Cita = ({cita, autor, image}) => {

  

  return (
    <>
      <div className="mt-24 flex flex-col justify-center items-center mx-10 mb-16">
        <div className="p-5 mx-28 bg-gray-50 ring-2 ring-gray-100 shadow-lg rounded-xl my-3 font-Poppins">
          <p className="font-normal text-lg text-gray-500 text-center mt-4">
            <span className="font-extrabold text-xl">"</span>
            {cita}
            <span className="font-extrabold text-xl">"</span>
            <br />
            <br />
            <span className="text-center font-light font-Montserrat">
              {autor}
            </span>
          </p>
          <img
            src={image}
            alt='Autor'
            className="rounded-full w-16 float-right relative mb-4 mr-3"
          />
        </div>
      </div>
    </>
  );
};

/*
 * Cards
 */

export const AboutCards = () => {
  const [divModal, setDivModal] = useState(true);
  const [divModal2, setDivModal2] = useState(false);
  const [divModal3, setDivModal3] = useState(false);
  const [divModal4, setDivModal4] = useState(false);

 const handleState = (value) => {
    switch (value) {
        case 'Div1':
            setDivModal(!divModal);
            setDivModal2(false);
            setDivModal3(false);
            setDivModal4(false);
            break;
            case 'Div2':
            setDivModal2(!divModal2);
            setDivModal3(false);
            setDivModal4(false);
            setDivModal(false);
            break;
            case 'Div3':
            setDivModal3(!divModal3);
            setDivModal(false);
            setDivModal2(false);
            setDivModal4(false);
            break;
            case 'Div4':
            setDivModal4(!divModal4);
            setDivModal3(false);
            setDivModal2(false);
            setDivModal(false);
            break; 
        default:
            break;
    }
 }
 

  return (
    <>
      <div className="flex flex-row justify-center items-center font-Poppins mx-10 select-none">
        <div className={`${ divModal ? 'BeforeConatiner' : 'BeforeConatinerBlank'}`}>
          <div className={`${ divModal ? 'BeforeRoundedConatiner' : 'BeforeRoundedConatinerBlank'}`}>
              1
          </div>
          <div className="shadow-xl rounded-xl cursor-pointer w-56 h-52 bg-white flex flex-col justify-center items-center">
            <img
              src={Presentation}
              alt="icono"
              onClick={() => handleState('Div1')}
            />
            <p className="text-gray-600 text-sm font-light text-center mb-5">
              Un lugar en dónde puedes ser maestro y 
              alumno.
            </p>
          </div>
          
        </div>


        <div className={`${ divModal2 ? 'BeforeConatinerYellow' : 'BeforeConatinerBlank'}`}>
          <div className={`${ divModal2 ? 'BeforeRoundedConatinerYellow' : 'BeforeRoundedConatinerBlank'}`}>
              2
          </div>
          <div className="shadow-xl rounded-xl cursor-pointer w-56 h-52 bg-white flex flex-col justify-center items-center">
            <img
              src={Evaluation}
              alt="icono"
              onClick={() =>  handleState('Div2')}
            />
            <p className="text-gray-600 text-sm font-light text-center mb-5">
              Una plataforma en dónde puedes
              compartir y adquirir conocimiento
            </p>
          </div>
          
        </div>

        <div className={`${ divModal3 ? 'BeforeConatinerSky' : 'BeforeConatinerBlank'}`}>
          <div className={`${ divModal3 ? 'BeforeRoundedConatinerSky' : 'BeforeRoundedConatinerBlank'}`}>
              3
          </div>
          <div className="shadow-xl rounded-xl cursor-pointer w-56 h-52 bg-white flex flex-col justify-center items-center pt-5">
            <img
              src={Diploma}
              alt="icono"
              onClick={() => handleState('Div3')}
            />
            <p className="text-gray-600 text-sm font-light text-center mb-5">
              Un puente para <br/>logar tus metas
            </p>
          </div>
          
        </div>


        <div className={`${ divModal4 ? 'BeforeConatinerGreen' : 'BeforeConatinerBlank'}`}>
          <div className={`${ divModal4 ? 'BeforeRoundedConatinerGreen' : 'BeforeRoundedConatinerBlank'}`}>
              4
          </div>
          <div className="shadow-xl rounded-xl cursor-pointer w-56 h-52 bg-white flex flex-col justify-center items-center pt-4">
            <img
              src={Rating}
              alt="icono"
              onClick={() => handleState('Div4')}
            />
            <p className="text-gray-600 text-sm font-light text-center mb-5">
              Un medio en el cual tu Feedback es indispensable
            </p>
          </div>
          
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
