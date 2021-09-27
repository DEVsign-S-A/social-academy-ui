import React from 'react'
import { AbilityList } from './UserProfileComponents/AbilityList';
import { NothingToShow } from './UserProfileComponents/NothingToShow';

export const UserExperience = ({extracurricular, experiencia}) => {
    return (
        <div className = "flex flex-col justify-center UserExperience">
            

            <div className = "UserCurricular ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Actividades Extracurriculares</h1>
                {
                    (extracurricular && Array.isArray(extracurricular) && (extracurricular.length > 0)) ? (
                    extracurricular.map((curricular, index) =>(
                        <AbilityList key = {index} dato = {curricular} />
                    ))) : (
                        <NothingToShow dato = {"actividades"} />
                    )
                }
            </div>

            <div className = "UserWork ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Experiencia laboral</h1>
                {
                    (experiencia && Array.isArray(experiencia) && (extracurricular.length > 0) ) ? (
                        experiencia.map((expLaboral, index) =>(
                            <AbilityList key = {index} dato = {expLaboral.descripcion} {...expLaboral} />
                        ))) : (
                            <NothingToShow dato = {"experiencia laboral"} />
                        )
                }
            </div>
        </div>
    )
}
