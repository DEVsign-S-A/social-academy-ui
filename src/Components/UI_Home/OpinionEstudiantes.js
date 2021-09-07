import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { CardOpinion } from './HomeComponents/CardOpinion';

const arrowStyle = {
    color: "gray",
    fontSize: "5vw"
  }
  
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={arrowStyle} />
      </div>
    );
  };

  const NextBtn = ( props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={arrowStyle} />
      </div>
    );
  };

export const OpinionEstudiantes = () => {
    const propsSlider = {
        centerMode: true,
        speed: 600,
        centerPadding: 0,
        slidesToShow: 3,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              centerMode: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          }
        ]
      }

      const opinionesUsuarios = [
          {img: `https://res.cloudinary.com/socialacademy/image/upload/v1630601458/Social%20Academy%20Image/HomeScreen/OpinionesEstudiantes/ProfilePicture1_ihbtku.jpg`, 
          opinion: "Encontrar datos del marketing de empresas nicaraguenses es muy complicado. Sin embargo, Social Academy me permite encontrar informacion recopilada por estudiantes en sus proyectos universitarios.", 
          nombre: "Arthur Brooklyn", carrera: "Marketing"},
          {img: `https://res.cloudinary.com/socialacademy/image/upload/v1630601453/Social%20Academy%20Image/HomeScreen/OpinionesEstudiantes/ProfilePicture2_nxxips.jpg`, 
          opinion: "La mayoria de la documentacion de mi carrera se encuentra en inglés, esto dificulta encontrar información. Sin embargo, Social Academy me permite aprender de manera independiente en mi idioma.", 
          nombre: "Mariano Garcia", carrera: "Dearrollador"},
          {img: `https://res.cloudinary.com/socialacademy/image/upload/v1630601452/Social%20Academy%20Image/HomeScreen/OpinionesEstudiantes/ProfilePicture3_iz3ftp.jpg`, 
          opinion: "Es una plataforma de educación en línea que ofrece cursos de vídeo, programas y recursos para individuos. Me permite encontrar material publicado tanto por estudiantes como por profesionales.", 
          nombre: "Frank Silva", carrera: "Diseñador"},
          {img: `https://res.cloudinary.com/socialacademy/image/upload/v1630601459/Social%20Academy%20Image/HomeScreen/OpinionesEstudiantes/ProfilePicture4_lhzga9.jpg`, 
          opinion: "El autoestudio es la base de mi educación, todos los días reviso el repositorio de Social Academy para encontrar nuevos ensayos o documentos universitarios publicados por sus usuarios para aprender", 
          nombre: "James Moore", carrera: "Finanzas"},
          {img: `https://res.cloudinary.com/socialacademy/image/upload/v1630601457/Social%20Academy%20Image/HomeScreen/OpinionesEstudiantes/ProfilePicture5_kzxbfv.jpg`, 
          opinion: "En mi profesion debo aprender siempre, los cursos de Social Academy me han permitido aprender edición de vídeos para mejorar mis labores periodisticas y mejorar las noticias que subo a mi blog", 
          nombre: "Jose Perez", carrera: "Periodista"}
      ];
    return (
        <div className="testimonial OpinionesEstudiantes" >
      <div className = "ContenedorEstudiantes" >
        <h1>Nuestros Usuarios</h1>
        <Slider {...propsSlider} >
            {
                opinionesUsuarios.map((opinion, index)=> (
                    <CardOpinion key = {index} img = {opinion.img} opinion = {opinion.opinion} nombre = {opinion.nombre} carrera = {opinion.carrera} />
                ))
            }
        </Slider>
      </div>
    </div>
    )
}
