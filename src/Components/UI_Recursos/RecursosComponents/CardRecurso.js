import React from 'react';
import { Link } from 'react-router-dom';

export const CardRecurso = ({
    titulo,
    rid, 
    descripcion, 
    uid,
    nombreUsuario,
    fotoPerfil,
    fechaSubida,
    tipo}) => {
    let iconoRecurso = "";
    switch (tipo) {
        case 'Documento':
            iconoRecurso = `https://res.cloudinary.com/socialacademy/image/upload/v1631580390/Social%20Academy%20Image/IconosRecursos/Documentacion_mt9bwu.png`;
            break;
        case 'Video':
            iconoRecurso = `https://res.cloudinary.com/socialacademy/image/upload/v1631580390/Social%20Academy%20Image/IconosRecursos/Video_glmrab.png`;
            break;
        case 'Recurso':
            iconoRecurso = `https://res.cloudinary.com/socialacademy/image/upload/v1631580390/Social%20Academy%20Image/IconosRecursos/Recurso_tb9ozz.png`
            break;
        default:
            break;
    }

    return (
        <Link to = {`/Resource/${rid}`}
            className="relative bg-white rounded-2xl CardRecurso">
                <div className=" text-white flex items-center absolute rounded-full mlIcono">
                    <img className = "IconoRecurso shadow-xl" src = {iconoRecurso} alt = "Icono Recurso" />
                </div>
                <div className="ContenidoCard">
                    <h1 className="TituloRecurso">
                        {titulo}
                    </h1>
                    <p className = "DescripcionRecurso">
                        {descripcion}
                    </p>
                    <div className="border-t-2 "></div>

                    <div className="flex items-center justify-between mtAvatar">
                        <Link to = {`/Profile/${uid}`} >
                                <div className = "user-logo">
                                    <img className = "AvatarRecurso object-cover rounded-full shadow" 
                                    src= {fotoPerfil}
                                    alt="avatar"/>
                                </div>
                        </Link>
                        <div className = "flex items-center flex-col content-center">
                            <div className = "text-gray-400 ContenedorFecha">
                                <i className="far fa-calendar-minus"></i>
                                <h4>{fechaSubida}</h4>
                            </div>
                            <Link to = {`/Profile/${uid}`}
                                className = "text-gray-500 NombreUsuario">
                                {nombreUsuario}
                            </Link>                   
                        </div>
                    </div>
                </div>
        </Link>
    )
}
