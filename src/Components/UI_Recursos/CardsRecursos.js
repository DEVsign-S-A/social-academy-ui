import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingResources } from '../../Redux/Actions/resourcesActions';
import { CardRecurso } from './RecursosComponents/CardRecurso';

export const CardsRecursos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startLoadingResources());
    }, [dispatch]);

    const {resources} = useSelector(state => state.resource)

    return (
        <div className = "CardsRecursos">
            <h1 className = "TituloContenedorRecursos">Encuentra la informacion que necesitas</h1>
            <div className = "ContenedorRecursos">
                {
                    (resources)&&(resources.map(recurso =>(
                        <CardRecurso
                            key = {recurso.rid}
                            {...recurso}
                        />
                    )))
                }
            </div>
        </div>
    )
}
