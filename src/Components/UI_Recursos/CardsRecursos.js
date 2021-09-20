import React from 'react';
import { CardRecurso } from './RecursosComponents/CardRecurso';

export const CardsRecursos = () => {
    const recursos = [
        {
            titulo: 'El gran libro de Programacion Android',
            descripcion: 'Introduce al lector en técnicas más avanzadas para realizar sus propios programas, para smartphone, tablet o cualquier otro dispositivo con el sistema operativo Android.',
            nombreUsuario: 'Arthur Brooklyn',
            imagenPerfil: 'https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
            fecha: '12/08/2020',
            tipo: 'documento'
        },
        {
            titulo: 'El gran libro de Programacion Android',
            descripcion: 'Introduce al lector en técnicas más avanzadas para realizar sus propios programas, para smartphone, tablet o cualquier otro dispositivo con el sistema operativo Android.',
            nombreUsuario: 'Arthur Brooklyn',
            imagenPerfil: 'https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
            fecha: '12/08/2020',
            tipo: 'video'
        },
        {
            titulo: 'El gran libro de Programacion Android',
            descripcion: 'Introduce al lector en técnicas más avanzadas para realizar sus propios programas, para smartphone, tablet o cualquier otro dispositivo con el sistema operativo Android.',
            nombreUsuario: 'Arthur Brooklyn',
            imagenPerfil: 'https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
            fecha: '12/08/2020',
            tipo: 'recurso'
        },
        {
            titulo: 'El gran libro de Programacion Android',
            descripcion: 'Introduce al lector en técnicas más avanzadas para realizar sus propios programas, para smartphone, tablet o cualquier otro dispositivo con el sistema operativo Android.',
            nombreUsuario: 'Arthur Brooklyn',
            imagenPerfil: 'https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
            fecha: '12/08/2020',
            tipo: 'documento'
        },
        {
            titulo: 'El gran libro de Programacion Android',
            descripcion: 'Introduce al lector en técnicas más avanzadas para realizar sus propios programas, para smartphone, tablet o cualquier otro dispositivo con el sistema operativo Android.',
            nombreUsuario: 'Arthur Brooklyn',
            imagenPerfil: 'https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
            fecha: '12/08/2020',
            tipo: 'documento'
        }
    ];
    return (
        <div>
            <h1 className = "TituloContenedorRecursos">Encuentra la informacion que necesitas</h1>
            <div className = "ContenedorRecursos">
                {
                    recursos.map((recurso, index) =>(
                        <CardRecurso
                            key = {index}
                            titulo = {recurso.titulo}
                            descripcion = {recurso.descripcion}
                            nombreUsuario = {recurso.nombreUsuario}
                            imagenPerfil = {recurso.imagenPerfil}
                            fecha = {recurso.fecha}
                            tipo = {recurso.tipo}
                        />
                    ))
                }
            </div>
        </div>
    )
}
