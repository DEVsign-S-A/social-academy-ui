import React from 'react';

export const CardDescripcion = ({path, titulo, subtitulo}) => {
    return (
        <div className = "DescripcionIndividual">
            <img src={path} alt="Icono Index"/>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </div>
    )
}
