import { types } from "../Types/type";

const initialState = {
        userId: 'uid99',
        nombreUsuario: 'Jeisson Gonzalez',
        fotoPerfil: 'https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
        correo: 'jeiglz@gmail.com',
        fechaNacimiento: '1998-12-13',
        carrera: 'Ingenieria en Sistemas de Informacion',
        ciudad: 'Jinotepe', 
        departamento: 'Carazo', 
        pais: 'Nicaragua',
        telefono: '712345678',
        linkedin: 'https://www.linkedin.com',
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com',
        twitter: 'https://www.twitter.com',
        descripcion: 'Ingeniero de Software, Co - Fundador y CEO de SkillGravity. He estado dirigiendo una compañia de 10 personas por 5 años. Cuento con experiencia en desarrollo móvil con React Native, Ionic y Flutter. Orgulloso de haber iniciado un Start Up con pocos recursos, dirigiendola hasta lanzar una web y app móvil revolucionaria.',
        habilidades: ['Proactivo', 'Perseverante', 'Trabajo en equipo', 'Liderazgo'],
        idiomas: ['Español', "Inglés"],
        extracurricular: ['Rally Latinoamericano de Innovacion 2020', 'Hackathon Nicaragua 2020', 'Incubacion de Start Ups', 'Aceleracion de Start Ups', 'Competencia de negocios Yo Emprendedor 2021'],
        experiencia: [
            {descripcion: 'Pasante recursos humanos alcaldia de Jinotepe', FechaInicio: '2019/1/20', FechaFinal: '2019/6/30'}, 
            {descripcion: 'Pasante asistente gerencia SINSA', FechaInicio: '2020/4/15', FechaFinal: '2019/7/20'}],
        curriculumLink: 'https://firebasestorage.googleapis.com/v0/b/social-academy-1c439.appspot.com/o/CurriculumDePrueba.pdf?alt=media&token=d67474d0-3f74-4c39-b3dd-899135e8c88f' 
}

export const authReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.authLogin:
            return {/*Objeto My User */}
        case types.authLogout:
            return {}
        default:
            return state;
    }
}