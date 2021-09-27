import React from 'react';
import { Footer } from '../UI_Footer/Footer';
import { TituloAgregarCurso } from '../UI_Recursos/RecursosComponents/TituloAgregarCurso';
import { FormNewCourse } from './CursosComponents/FormNewCourse';

export const NewCourse = () => {
    return (
        <>
            <TituloAgregarCurso titulo = {"curso"} pathHistory = {"/Cursos"} />
            <FormNewCourse/>
            <Footer/>
        </>
    )
}
