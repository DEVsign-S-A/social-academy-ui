import React from 'react'
import { dataUser } from '../../data/dataUser'
import { UserLabel } from './UserProfileComponents/UserLabel';

export const AboutUser = () => {
    const {descripcion, habilidades, idiomas} = dataUser;
    return (
        <div className = "flex flex-col justify-center AboutUser">
            <div className = "Bio ContenedoresPerfil">
                <h1 className = "TitulosPerfil"> Bio</h1>
                <h3>{descripcion}</h3>
            </div>

            <div className = "ContenedorHabilidades ContenedoresPerfil">
                <h1 className = "TitulosPerfil">
                    Habilidades
                </h1>
                <div className = "flex flex-row flex-wrap Abilities">
                    {
                        habilidades.map((habilidad, index) =>(
                            <UserLabel key = {index} dato = {habilidad} />
                        ))
                    }
                </div>
            </div>
            
            <div className = "UserLanguages ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Idiomas</h1>
                <div className = "flex flex-row flex-wrap Languages">
                {
                    idiomas.map((idioma, index) =>(
                        <UserLabel key = {index} dato = {idioma} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}
