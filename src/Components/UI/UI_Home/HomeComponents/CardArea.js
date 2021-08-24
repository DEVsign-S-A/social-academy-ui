import React from 'react';
import { Link } from 'react-router-dom';

export const CardArea = ({path, titulo, descripcion}) => {
    return (
        <div className = "card">
            <div className = "face face1">
                <div className = "content">
                    <img src = {path} alt = "area de estudio"/>
                    <h3>{titulo}</h3>
                </div>
            </div>
            <div className = "face face2">
                <div className = "content">
                    <p>{descripcion}</p>
                    <Link to = "/Cursos"
                        className = "pointer a">
                        Leer mas
                    </Link>
                </div>
            </div>
        </div>
    )
}
