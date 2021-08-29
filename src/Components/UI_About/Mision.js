import React from "react";
import team from "../../assets/UI-About/team.jpg";

export const Mision = () => {
  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>Misión</h2>
        <div className="section-title"></div>
      </div>

      <div className="flex justify-between">
        {" "}
        <div className="mt-16 mx-10 text-gray-500 text-xl font-Poppins">
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
            src={team}
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
