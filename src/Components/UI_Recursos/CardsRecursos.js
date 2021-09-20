import React from 'react';
import { dataResources } from '../../data/dataResources';
import { CardRecurso } from './RecursosComponents/CardRecurso';

export const CardsRecursos = () => {
    return (
        <div className = "CardsRecursos">
            <h1 className = "TituloContenedorRecursos">Encuentra la informacion que necesitas</h1>
            <div className = "ContenedorRecursos">
                {
                    dataResources.map(recurso =>(
                        <CardRecurso
                            key = {recurso.id}
                            {...recurso}
                        />
                    ))
                }
            </div>
        </div>
    )
}
