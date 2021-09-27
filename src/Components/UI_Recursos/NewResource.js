import React from 'react';
import { Footer } from '../UI_Footer/Footer';
import { FormNewResource } from './RecursosComponents/FormNewResource';
import { TituloAgregarCurso } from './RecursosComponents/TituloAgregarCurso';

export const NewResource = () => {
    return (
        <>
            <TituloAgregarCurso titulo = {'recurso'} pathHistory = {'/Recursos'} />
            <FormNewResource/>
            <Footer/>
        </>
    )
}
