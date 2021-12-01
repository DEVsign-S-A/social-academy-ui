import React from 'react';
import { Link } from 'react-router-dom';

export const CardCurso = ({
    user,
    imagenPortada,
    titulo,
    descripcion,
    precio
}) => {
    return (
                <Link to = "/"
                    className = "pointer rounded-xl CardCurso">
                <div
                    className = " grid overflow-hidden rounded-xl bg-white ">
                    <div className = "col-sp an-3 row-span-4 padding1 m-1">
                            <img
                            src={imagenPortada}
                            alt="Portada Curso"
                            className = "rounded-t-xl object-cover w-full ImagenPortada"
                            />

                            <div className = "right-2 py-2 px-4 PrecioCurso">
                                <span className = "font-semibold PrecioCurso azulSA">
                                    $ {precio}
                                </span>
                            </div>
                    </div>

                    <div className = "paddingXY bg-white">
                            <h2 className = "TituloCard azulSA">
                                {titulo}
                            </h2>
                            <p className = "DescripcionCard text-gray-700 my-3 ">
                            {descripcion}
                            </p>
                            <div className = "user flex items-center -ml-3 mt-2 ">
                                <div >
                                    <div className = "user-logo">
                                        <img className = "AvatarUsuario object-cover rounded-full mx-4  shadow" 
                                        src={user.fotoPerfil} 
                                        alt="avatar"/>
                                    </div>
                                </div>
                                
                                <div
                                        className = "text-gray-500 NombreUsuario">
                                        {user.nombre}
                                </div>
                            </div>
                            
                        </div>
                    </div> 
                </Link>
    )
}
