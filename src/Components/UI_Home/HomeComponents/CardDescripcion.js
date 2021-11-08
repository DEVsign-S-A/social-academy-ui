import React from 'react';

export const CardDescripcion = ({path, titulo, subtitulo}) => {
    return (
        <div className = "DescripcionIndividual">
            <img src={path} alt="Icono Index"/>
            <h1
                className='font-Poppins font-semibold text-gray-700'
            >{titulo}</h1>
            <h2
                className='font-Poppins font-semibold text-gray-700'
            >{subtitulo}</h2>
        </div>
    )
}
