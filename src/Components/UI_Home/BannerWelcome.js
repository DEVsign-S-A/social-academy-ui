import React from 'react';
import { Link } from 'react-router-dom';
import { CardDescripcion } from './HomeComponents/CardDescripcion';

export const BannerWelcome = () => {
    const infoDescripcion = [
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630603377/Social%20Academy%20Image/HomeScreen/DescripcionPlataforma/obtenerPasantias_nfmfbb.png`, 
        titulo: "Obtén pasantías", subtitulo: "Encuentra las ofertas de pasantías publicadas en Social Academy"},
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630603376/Social%20Academy%20Image/HomeScreen/DescripcionPlataforma/forosAcademicos_y8jozo.png`, 
        titulo: "Foros Académicos", subtitulo: "Aprende consultando a la comunidad y comparte tus conocimientos"},
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630603376/Social%20Academy%20Image/HomeScreen/DescripcionPlataforma/accedeRecursos_eaqqui.png`, 
        titulo: "Accede a Recursos", subtitulo: "Encuentra un repositorio de recursos compartidos por los usuarios"},
        {path: `https://res.cloudinary.com/socialacademy/image/upload/v1630603377/Social%20Academy%20Image/HomeScreen/DescripcionPlataforma/paraEmpresas_dqn2pn.png`, 
        titulo: "Para empresas", subtitulo: "Encuentra estudiantes para puestos de pasantias en tu empresa"}
    ];
    return (
        <div className = "BannerWelcome flex-column">
            <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630603832/Social%20Academy%20Image/HomeScreen/bannerWelcome_mxxwj5.png`} alt="Banner Index"/>
            <div className = "ContenidoSlider">
                <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630603811/Social%20Academy%20Image/HomeScreen/botonesSlider_wt0xf9.png`} alt="Botones de colores"/>
                <h1
                    className='text-white font-Poppins font-bold'
                >¡Únete ahora a la plataforma social más grande de Nicaragua!</h1>
                <h2
                    className='text-white font-Poppins font-bold'
                >Accede a la mayor comunidad de aprendizaje de la región, descubre nuestro repositorio académico
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
