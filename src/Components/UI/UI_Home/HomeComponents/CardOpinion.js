import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const CardOpinion = ({img, opinion, nombre, carrera}) => {

    return (
        <div className = "CardOpinion" >
      <img className = "ImagenComilla" src = {`./assets/HomeScreen/opinionEstudiantes/QuoteIcon.png`} alt = "comilla"/>
      <p>
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
