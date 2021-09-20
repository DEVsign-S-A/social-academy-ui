import React from 'react';
import { CardArea } from './HomeComponents/CardArea';

export const CardsAreas = () => {
    const infoCardsAreas = [
        {titulo:"Programacion", descripcion: "Estudia el desarrollo de softwares que administran sistemas de cómputo y aplicaciones", 
        path: `https://res.cloudinary.com/socialacademy/image/upload/v1630602972/Social%20Academy%20Image/HomeScreen/AreasEstudio/PROG_swrbe2.png`},
        {titulo:"Diseño", descripcion: "Estudia diseño de productos de comunicación e información y diseño de identidad corporativa", 
        path: `https://res.cloudinary.com/socialacademy/image/upload/v1630602973/Social%20Academy%20Image/HomeScreen/AreasEstudio/DISE_gmm38u.png`},
        {titulo:"Marketing", descripcion: "Estudia impulso y promoción de un producto o servicio de una empresa. Así como atención al cliente", 
        path: `https://res.cloudinary.com/socialacademy/image/upload/v1630602978/Social%20Academy%20Image/HomeScreen/AreasEstudio/MARK_fvemlz.png`},
        {titulo:"Administracion", descripcion: "Estudia direccion, control, planeacion y organizacion de una empresa; gestion de recursos humanos.", 
        path: `https://res.cloudinary.com/socialacademy/image/upload/v1630602971/Social%20Academy%20Image/HomeScreen/AreasEstudio/ADMI_hq8z6j.png`},
        {titulo:"Finanzas", descripcion: "Estudia la administración gerencial y financiera de una institución, banco o empresa. Genera perfiles gerenciales", 
        path: `https://res.cloudinary.com/socialacademy/image/upload/v1630602973/Social%20Academy%20Image/HomeScreen/AreasEstudio/FINA_fqordm.png`},
        {titulo:"Comunicacion", descripcion: "Estudia planeacion y ejecucion de los procesos de comunicación a través de diversos medios y grupos", 
        path: `https://res.cloudinary.com/socialacademy/image/upload/v1630602972/Social%20Academy%20Image/HomeScreen/AreasEstudio/COM_vhdkgu.png`}
    ];
    return (
        <div className = "Areas">
            <h2>Areas de Estudio</h2>
            <div className = "container-card">
                {
                    infoCardsAreas.map((cardArea, index) =>(
                        <CardArea key = {index} path = {cardArea.path} titulo = {cardArea.titulo} descripcion = {cardArea.descripcion} />
                    ))
                }
            </div>
        </div>
    )
}
