import React from 'react';
import { Link } from 'react-router-dom';
import { CardDescripcion } from './HomeComponents/CardDescripcion';

export const BannerWelcome = () => {
    const infoDescripcion = [
        {path: `./assets/HomeScreen/descripcionWelcome/obtenerPasantias.png`, titulo: "Obtén pasantías", subtitulo: "Encuentra las ofertas de pasantías publicadas en Social Academy"},
        {path: `./assets/HomeScreen/descripcionWelcome/forosAcademicos.png`, titulo: "Foros Académicos", subtitulo: "Aprende consultando a la comunidad y comparte tus conocimientos"},
        {path: `./assets/HomeScreen/descripcionWelcome/accedeRecursos.png`, titulo: "Accede a Recursos", subtitulo: "Encuentra un repositorio de recursos compartidos por los usuarios"},
        {path: `./assets/HomeScreen/descripcionWelcome/paraEmpresas.png`, titulo: "Para empresas", subtitulo: "Encuentra estudiantes para puestos de pasantias en tu empresa"}
    ];
    return (
        <div className = "BannerWelcome flex-column">
            <img src={`./assets/HomeScreen/bannerWelcome.png`} alt="Banner Index"/>
            <div className = "ContenidoSlider">
                <img src={`./assets/HomeScreen/botonesSlider.png`} alt="Botones de colores"/>
                <h1>¡Únete ahora a la plataforma social más grande de Nicaragua!</h1>
                <h2>Accede a la mayor comunidad de aprendizaje de la región, descubre nuestro repositorio académico
                e interactúa con otros usuario por medio de los foros</h2>
                <Link to = "/Login"
                        className = "BotonUnete pointer">
                        Unirme ahora
                </Link>
            </div>

            <div className = "BannerDescripcion">
                {
                    infoDescripcion.map((card, index) =>(
                        <CardDescripcion key = {index} path = {card.path} titulo = {card.titulo} subtitulo = {card.subtitulo} />
                    ))
                }
            </div>
        </div>
    )
}
