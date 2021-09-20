import React from 'react'
import { dataUser } from '../../data/dataUser'
import { AbilityList } from './UserProfileComponents/AbilityList';

export const UserExperience = () => {
    const {extracurricular, experiencia} = dataUser;
    return (
        <div className = "flex flex-col justify-center UserExperience">
            

            <div className = "UserCurricular ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Actividades Extracurriculares</h1>
                {
                    extracurricular.map((curricular, index) =>(
                        <AbilityList key = {index} dato = {curricular} />
                    ))
                }
            </div>

            <div className = "UserWork ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Experiencia laboral</h1>
                {
                    experiencia.map((expLaboral, index) =>(
                        <AbilityList key = {index} dato = {expLaboral.descripcion} {...expLaboral} />
                    ))
                }
            </div>
        </div>
    )
}
