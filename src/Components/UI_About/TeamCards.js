import React, { useState } from "react";
import { SocialItems } from "./SocialItems";
import "./TeamCards.css";

export const TeamCards = ({ nombre, cargo, image, description, cita }) => {
  const socialMedia = [
    { id: 1, path: "fab fa-facebook-f", enlace: "https://www.facebook.com/" },
    { id: 2, path: "fab fa-twitter", enlace: "https://www.twitter.com/" },
    { id: 3, path: "fab fa-instagram", enlace: "https://www.instagram.com/" },
    { id: 4, path: "fab fa-linkedin-in", enlace: "https://www.youtube.com/" },
  ];

  const [card, setCard] = useState(false);

  return (
    <>
      <div
        onClick={() => setCard(!card)}
        className={`bg-WhiteSocial rounded-3xl shadow-2xl card__inner ${
          card && "card__inner is-flipped "
        }`}
      >
        <div>
          <div className="card__face face__card-front flex px-5 justify-around pb-5">
            <div>
              <p className="font-Montserrat font-bold text-gray-600 mt-5 ">
                {nombre}
              </p>
              <br />
              <p className="font-Poppins font-medium text-gray-600">{cargo}</p>
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
                src={`${image}`}
                alt={nombre}
                className="rounded-full w-24 mt-9"
              />
            </div>
          </div>

          <div className="card__face face__card-back shadow-2xl rounded-xl">
            <div className="card__body mx-5 mt-5">
              <p className="text-base text-gray-600 font-Poppins">
                {description}
              </p>
              <p className="mt-2 italic font-thin text-sm text-gray-600 ">{cita}</p>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
