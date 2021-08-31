import React from "react";
import { TeamCards } from "./TeamCards";


export const Team = () => {


  const MembersTeam = [
    {
      id: 1,
      nombre: 'Jeisson Ñurinda',
      cargo: 'Co-Founder & CEO',
      image: 'https://res.cloudinary.com/socialacademy/image/upload/v1630442056/Social%20Academy%20Image/72113139_zaw6km_psdabl.jpg',
      description: ""
    },
    {
      id: 2,
      nombre: 'Kevin García',
      cargo: 'Co-Founder & CTO',
      image: 'https://res.cloudinary.com/socialacademy/image/upload/v1630442057/Social%20Academy%20Image/IMG_20210410_113432_zt0jxq_ocshxh.jpg',
      description: "Un simple desarrollador, con aspiraciones y sueños que lo superan.",
      cita: `Things happen, but we don't really know why.
        If it's supposed to be like this. 
        Why do most of us ignore the chance to miss?... BFMV (2005)`
    },
    {
      id: 3,
      nombre: 'Genesis Garay',
      cargo: 'CIO - Chief Innovation Officer',
      image: 'https://res.cloudinary.com/socialacademy/image/upload/v1630442056/Social%20Academy%20Image/51d51b7b-c792-4831-b8e2-e7ec4dcbaf5a_tiz8wl_uzowm5.jpg',
      description: ""
    },
    {
      id: 4,
      nombre: 'Maria Acuña',
      cargo: 'CMO - Chief Marketing Officer',
      image:"https://res.cloudinary.com/socialacademy/image/upload/v1630442057/Social%20Academy%20Image/IMG_20210828_165939_asn0ef_sgzs73.jpg",
      description: ""
    },

    
  ];

  return (
    <>
      <div className="text-center font-bold text-xl text-gray-800 my-5 font-Montserrat">
        <h2>Nuestro Equipo Creativo</h2>
        <div className="section-title"></div>
      </div>
      <div className="flex justify-between">
        <div className="mx-10 text-gray-500 text-xl font-Poppins mt-8 w-1/3">
          <p className="letterLine">
            <strong>Social Academy</strong> es una plataforma educativa con
            herramientas de colaboración y comucación estudiantil desarrollada
            por el equipo <strong>DEVsign</strong>. Esta ofrece una biblioteca
            virtual con documentación, cursos y videos. Además, foros académicos
            para facilitar la comunicación y el intercambio rápido de
            información entre los usuarios.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-2/3 mt-8 mx-5 select-none">
          
        {
          MembersTeam.map((member) => (
                  <TeamCards
                    key={member.id}
                    {...member}
                  />
                ))
        }
           
        </div>
      </div>
    </>
  );
};
