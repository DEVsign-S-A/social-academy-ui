import React from 'react';
import moment from 'moment';
import { RedSocial } from './UserProfileComponents/RedSocial';

export const UserInfo = ({nombreUsuario, 
    fotoPerfil, 
    fechaNacimiento, 
    carrera, 
    ciudad,
    departamento,
    pais, 
    telefono, 
    correo, 
    facebook,
    instagram,
    linkedin,
    twitter, 
    curriculumLink}) => {
    
    const annos = moment().diff(fechaNacimiento, 'years', false);

    const redesSociales = [
        
        {icono: 'fab fa-facebook-f', enlace: facebook, color: 'blue-900'},
        {icono: 'fab fa-instagram', enlace: instagram, color: 'pink-600'},
        {icono: 'fab fa-linkedin-in', enlace: linkedin, color: 'blue-700'},
        {icono: 'fab fa-twitter', enlace: twitter, color: 'blue-400'}
    ]
    return (
        <div className = "flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
            <img src = {fotoPerfil}
            alt = "Foto de Perfil"
            className = "UserImage" />
                <div className = "flex flex-col justify-center items-center" >
                    <h1>{nombreUsuario}</h1>
                        
                    <h3>{carrera}</h3>
            
                    <div className = "UserInformation">
                        <h4><b>Edad:</b> {annos} años </h4>
                          
                        <h4><b>Ciudad:</b> {ciudad} {departamento} {pais} </h4>

                        <h4><b>Telefono:</b> {telefono}</h4>
                        <h4><b>Correo:</b> {correo}</h4>
                    </div>
            
                    <div className = "UserSocialMedia flex flex-row justify-around">
                    {
                            redesSociales.map((redSocial, index) =>(
                                (redSocial.enlace)&&<RedSocial key = {index} {...redSocial} />
                            ))
                        }
                    </div>
        
                    {curriculumLink  && <div className = "flex justify-center">
                            <a href = {curriculumLink}
                                className = "BotonCurriculum" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Ver Curriculum
                            </a>
                        </div>
                    }
                </div>
            </div>
    )
}
