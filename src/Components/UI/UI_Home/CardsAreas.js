import React from 'react';
import { CardArea } from './HomeComponents/CardArea';

export const CardsAreas = () => {
    const infoCardsAreas = [
        {titulo:"Programacion", descripcion: "Estudia el desarrollo de softwares que administran sistemas de cómputo y aplicaciones", path: `./assets/HomeScreen/Areas/PROG.png`},
        {titulo:"Diseño", descripcion: "Estudia diseño de productos de comunicación e información y diseño de identidad corporativa", path: `./assets/HomeScreen/Areas/DISE.png`},
        {titulo:"Marketing", descripcion: "Estudia impulso y promoción de un producto o servicio de una empresa. Así como atención al cliente", path: `./assets/HomeScreen/Areas/MARK.png`},
        {titulo:"Administracion", descripcion: "Estudia direccion, control, planeacion y organizacion de una empresa; gestion de recursos humanos.", path: `./assets/HomeScreen/Areas/ADMI.png`},
        {titulo:"Finanzas", descripcion: "Estudia la administración gerencial y financiera de una institución, banco o empresa. Genera perfiles gerenciales", path: `./assets/HomeScreen/Areas/FINA.png`},
        {titulo:"Comunicacion", descripcion: "Estudia planeacion y ejecucion de los procesos de comunicación a través de diversos medios y grupos", path: `./assets/HomeScreen/Areas/COM.png`}
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
