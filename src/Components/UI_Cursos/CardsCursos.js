import React from 'react';
import { CardCurso } from './CursosComponents/CardCurso';

export const CardsCursos = () => {
    const cardsArray = [1,2,3,4,5];
    return (
        <div>
            <h1 className = "TituloCursos" >Nuestros Cursos</h1>
            
            <div className= "ContenedorCards">
                {
                    cardsArray.map(card =>(
                        <CardCurso key = {card} />
                    ))
                }
            </div>
        </div>
    )
}
