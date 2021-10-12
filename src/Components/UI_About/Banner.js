import React from "react";
import "./style.css";

export const Banner = () => {
  return (
    <>
      <section className="flex flex-col items-center lg:flex-row lg:justify-between content-image">
        <div className="md:block xs:hidden">
          <div className="px-16 pt-10 flex flex-col items-center font-Montserrat">
          <img src='https://res.cloudinary.com/socialacademy/image/upload/v1633466520/Social%20Academy%20Image/icons%20General/BLUEACADEM_Y_1_lj0ltd.png'
          alt='Social Academy'
          className='w-80'/>
          <h3 className="text-3xl lg:text-4xl text-primary font-bold py-5 my-2 flex flex-col items-center">
              <span className="py-3">&</span>
              <span className="text-second py-1">DEVsign</span>
            </h3>
            <div className="hidden md:block">
              <p className="text-gray-500 text-xl font-medium p-1 font-Poppins">
                Te da la bienvenida a la plataforma de
              </p>
              <p className="text-gray-500 text-xl font-medium  p-1 font-Poppins">
                retroalimentación estudiantil
              </p>
              <p className="text-gray-500 text-xl font-medium p-1 font-Poppins">
                más grande del País
              </p>
            </div>
            <input
              type="submit"
              value="registrate"
              className="btn-social-blue font-Poppins"
            />
          </div>
        </div>

        <div className=''>
          <img
            src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442078/Social%20Academy%20Image/MARCO_d6wxoh.jpg`}
            alt="banner Social"
            id="ImageBanner"
            loading="lazy"
            className="rounded-xl shadow-xl mt-32 lg:mr-10 bg-blanco"
          />
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
};
