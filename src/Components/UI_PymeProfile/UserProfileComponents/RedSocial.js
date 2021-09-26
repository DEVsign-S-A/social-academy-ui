import React from 'react';

export const RedSocial = ({icono, enlace, color}) => {
    return (
            <a href = {enlace} 
                target="_blank" 
                className = {`RedSocial pointer flex items-center justify-center text-gray-700 border-2 border-gray-700 hover:text-${color} hover:border-${color}`}
                rel="noopener noreferrer">
                    <i className={icono}></i>
            </a>
    )
}
