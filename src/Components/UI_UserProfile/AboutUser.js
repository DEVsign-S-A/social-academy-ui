import React from 'react'
import { NothingToShow } from './UserProfileComponents/NothingToShow';
import { UserLabel } from './UserProfileComponents/UserLabel';

export const AboutUser = ({descripcion, habilidades, idiomas}) => {
    //const {descripcion, habilidades, idiomas} = dataUser[0];
    return (
        <div className = "flex flex-col justify-center AboutUser">
            <div className = "Bio ContenedoresPerfil">
                <h1 className = "TitulosPerfil"> Bio</h1>
                {
                    (descripcion)?(
                        <h3>{descripcion}</h3>
                    ):(
                        <NothingToShow dato = {"decripcion"} />
                    )
                }
            </div>

            <div className = "ContenedorHabilidades ContenedoresPerfil">
                <h1 className = "TitulosPerfil">
                    Habilidades
                </h1>
                <div className = "flex flex-row flex-wrap Abilities">
                    {
                        (habilidades && Array.isArray(habilidades) && (habilidades.length > 0) ) ? (
                            habilidades.map((habilidad, index) =>(
                                <UserLabel key = {index} dato = {habilidad} />
                            ))) : (
                                <NothingToShow dato = {"experiencia laboral"} />
                            )
                    }
                </div>
            </div>
            
            <div className = "UserLanguages ContenedoresPerfil">
                <h1 className = "TitulosPerfil">Idiomas</h1>
                <div className = "flex flex-row flex-wrap Languages">
                {
                    (idiomas && Array.isArray(idiomas) && (idiomas.length > 0) ) ? (
                        idiomas.map((idioma, index) =>(
                            <UserLabel key = {index} dato = {idioma} />
                        ))) : (
                            <NothingToShow dato = {"idiomas"} />
                        )
                }
                </div>
            </div>
        </div>
    )
}
