import React from 'react'
import { AbilityList } from './UserProfileComponents/AbilityList';

export const PymeExperience = ({masinfo: extracurricular, otra: experiencia}) => {
    return (
        <div className = "flex flex-col justify-center UserExperience">
            

            <div className = "UserCurricular ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Info Extra</h1>
                {
                    (extracurricular && (
                        <AbilityList dato = {extracurricular} />
                    ))
                }
            </div>

            <div className = "UserWork ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Datos laborales</h1>
                {
                    (experiencia && (
                            <AbilityList dato = {experiencia} />
                        ))
                }
            </div>
        </div>
    )
}
