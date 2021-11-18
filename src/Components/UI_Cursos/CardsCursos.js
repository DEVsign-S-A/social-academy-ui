import React from 'react';
import { dataCourses } from '../../data/dataCourses';
import { CardCurso } from './CursosComponents/CardCurso';

export const CardsCursos = () => {
    
    return (
        <div className = "CardsCursos">
            <h1 className = "TituloCursos" >Nuestros Cursos</h1>
            
            <div className= "ContenedorCards animate__animated animate__fadeIn">
                {
                    dataCourses.map(course =>(
                        <CardCurso 
                            key = {course.id}
                            {...course} />
                    ))
                }
            </div>
        </div>
    )
}
