import React from "react";

export const Mision = () => {
  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>Misión</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        {" "}
        <div className="text-sm mx-8 lg:mt-16 lg:mx-10 text-gray-500 lg:text-xl font-Poppins">
          <p className="letterLine">
            Social academy esta compremetida en brindar a los estudiantes un
            repositorio de información que necesitan para su formación
            profesionales con distintos perfiles académicos (documentación,
            artículos, foros, cursos y pasantías); todo esto es para resoponder
            las distintas necesidades del usuario, Permitiendo el desarrollo
            social y profesional en una plataforma online.
          </p>
        </div>
        <div className="mx-14 bannerMision">
          <br />
          <br />
          <br />
          <br />
          <img
            src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442085/Social%20Academy%20Image/team_tgkqak.jpg`}
            alt="team"
            loading="lazy"
            className="rounded-2xl shadow-2xl imgMision"
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
