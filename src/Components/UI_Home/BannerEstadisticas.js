import React from 'react';
import { ItemBeneficios } from './HomeComponents/ItemBeneficios';

export const BannerEstadisticas = () => {
    const infoBeneficios =[
        {dato: "10,000", descripcion: "Usuarios nos visitan cada mes"},
        {dato: "5,679", descripcion: "Estudiantes se han registrado"},
        {dato: "2,680", descripcion: "Han cumplido sus metas"},
        {dato: "Top 10", descripcion: "Plataformas learning startups"}
    ];
    return (
        <div className = "beneficiosSocialAcademy flex-column-center">
            <h1
            className='font-bold text-white'
            >Interactúa, crea y comparte con otros universitarios</h1>
            <div className ="descripcionBeneficiosSA">
                {
                    infoBeneficios.map(item =>(
                        <ItemBeneficios key = {item.dato} dato = {item.dato} descripcion = {item.descripcion} />
                    ))
                }
            </div>
        </div>
    )
}
