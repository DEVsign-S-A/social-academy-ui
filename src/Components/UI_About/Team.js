import React from "react";
import kevin from "../../assets/UI-About/IMG_20210410_113432.jpg";
import jeisson from "../../assets/UI-About/72113139.jpg";
import maria from "../../assets/UI-About/pexels-fauxels-3182759.jpg";
import genesis from "../../assets/UI-About/51d51b7b-c792-4831-b8e2-e7ec4dcbaf5a.jpg";
import { SocialItems } from "./SocialItems";

export const Team = () => {
  const socialMedia = [
    { id: 1, path: "fab fa-facebook-f", enlace: "https://www.facebook.com/" },
    { id: 2, path: "fab fa-twitter", enlace: "https://www.twitter.com/" },
    { id: 3, path: "fab fa-instagram", enlace: "https://www.instagram.com/" },
    { id: 4, path: "fab fa-linkedin-in", enlace: "https://www.youtube.com/" },
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

        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-2/3 mt-8 mx-5">
          
          <div className="bg-WhiteSocial rounded-3xl shadow-2xl flex px-5 justify-around pb-5">
            <div>
              <p className="font-Montserrat font-bold text-gray-600 mt-5 ">
                Jeisson Ñurinda
              </p>
              <br />
              <p className="font-Poppins font-medium text-gray-600">
                Co-Founder & CEO
              </p>
              <div className="flex-row mt-5 text-gray-400 text-lg">
                {socialMedia.map((media) => (
                  <SocialItems
                    key={media.id}
                    path={media.path}
                    enlace={media.enlace}
                  />
                ))}
              </div>
            </div>

            <div>
              <img
                src={jeisson}
                alt="Kevin"
                className="rounded-full w-24 mt-9"
              />
            </div>
          </div>

          <div className="bg-WhiteSocial rounded-3xl shadow-2xl flex px-5 justify-around pb-5">
            <div>
              <p className="font-Montserrat font-bold text-gray-600 mt-5">
                Kevin García
              </p>
              <br />
              <p className="font-Poppins font-medium text-gray-600">
                Co-Founder & CTO
              </p>
              <div className="flex-row mt-5 text-gray-400 text-lg">
                {socialMedia.map((media) => (
                  <SocialItems
                    key={media.id}
                    path={media.path}
                    enlace={media.enlace}
                  />
                ))}
              </div>
            </div>
            <div>
              <img src={kevin} alt="Kevin" className="rounded-full w-24 mt-9" />
            </div>
          </div>

          <div className="bg-WhiteSocial rounded-3xl shadow-2xl flex px-5 justify-around pb-5">
            <div>
              <p className="font-Montserrat font-bold text-gray-600 mt-7">
                Genesis
              </p>
              <br />
              <p className="font-Poppins font-medium text-gray-600">
                CIO - Chief Innovation Officer
              </p>
              <div className="flex-row mt-5 text-gray-400 text-lg mx-5">
                {socialMedia.map((media) => (
                  <SocialItems
                    key={media.id}
                    path={media.path}
                    enlace={media.enlace}
                  />
                ))}
              </div>
            </div>

            <div>
              <img
                src={genesis}
                alt="Kevin"
                className="rounded-full w-24 mt-9"
              />
            </div>
          </div>

          <div className="bg-WhiteSocial rounded-3xl shadow-2xl flex px-5 justify-around pb-5">
            <div>
              <p className="font-Montserrat font-bold text-gray-600 mt-5">
                María
              </p>
              <br />
              <p className="font-Poppins font-medium text-gray-600">
                CMO - Chief Marketing Officer
              </p>
              <div className="flex-row mt-5 text-gray-400 text-lg mx-5">
                {socialMedia.map((media) => (
                  <SocialItems
                    key={media.id}
                    path={media.path}
                    enlace={media.enlace}
                  />
                ))}
              </div>
            </div>
            <div>
              <img src={maria} alt="Kevin" className="rounded-full w-24 mt-9" />
            </div>
          </div>
           
        </div>
      </div>
    </>
  );
};
