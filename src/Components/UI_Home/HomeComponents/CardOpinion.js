import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const CardOpinion = ({img, opinion, nombre, carrera}) => {

    return (
        <div className = "CardOpinion" >
      <img className = "ImagenComilla" src = {`https://res.cloudinary.com/socialacademy/image/upload/v1630601448/Social%20Academy%20Image/HomeScreen/OpinionesEstudiantes/QuoteIcon_g5bj9c.png`} alt = "comilla"/>
      <p
      className='font-semibold'
      >
        {opinion}
      </p>

      <div className = "PersonaOpinion">
        <img
          alt = "Imagen perfil"
          src={img}
          className = "imagenOpinion"
        />
        <span>
          {nombre}
          <h4>{carrera}</h4>
        </span>
      </div>
    </div>
    )
}
