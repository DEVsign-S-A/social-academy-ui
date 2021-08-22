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

            Brindar a los estudiantes una plataforma en la que encuentren la
            información que necesitan para su formación profesional con
            distintos perfiles académicos, por medio de secciones con
            documentación, cursos, artículos y foros para responder a las
            distintas necesidades que los estudiantes puedan encontrarse.
            Permitiendo el desarrollo social y académico al complementar lo
            aprendido en los planes de estudios.
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
            loading='lazy'
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
