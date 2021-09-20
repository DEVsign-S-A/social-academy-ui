import React from 'react';
import { Link } from 'react-router-dom';

export const CardCurso = () => {
    return (
                <Link to = "/"
                    className = "pointer rounded-xl CardCurso">
                <div
                    className = " grid overflow-hidden rounded-xl bg-white ">
                    <div className = "col-sp an-3 row-span-4 padding1 m-1">
                            <img
                            src="https://picsum.photos/640/400/?random"
                            alt="Portada Curso"
                            className = "rounded-t-xl object-cover w-full ImagenPortada"
                            />

                            <div className = "right-2 py-2 px-4 PrecioCurso">
                                <span className = "font-semibold PrecioCurso azulSA">
                                    $ 15.00
                                </span>
                            </div>
                    </div>

                    <div className = "paddingXY bg-white">
                            <h2 className = "TituloCard azulSA">
                                Administracion de Redes
                            </h2>
                            <p className = "DescripcionCard text-gray-700 my-3 ">
                            Aprende las habilidades necesarias para diseñar una nueva red. Consigue implementar dicho proyecto de red utilizando el modelo TCP/IP. Desarrolla y expande tus conocimientos sobre ciberseguridad para una red segura.
                            </p>
                            <div className = "user flex items-center -ml-3 mt-2 ">
                                <Link to = "/Login">
                                    <div className = "user-logo">
                                        <img className = "AvatarUsuario object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="avatar"/>
                                    </div>
                                </Link>
                                
                                <Link to = "/Login"
                                        className = "text-gray-500 NombreUsuario">
                                        Marlon Aguilar
                                </Link>
                            </div>
                            
                        </div>
                    </div> 
                </Link>
    )
}
