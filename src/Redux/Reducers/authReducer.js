import { types } from "../Types/type";
const initialState = {
    nombreUsuario: '',
    fotoPerfil: 'https://res.cloudinary.com/socialacademy/image/upload/v1635096147/Social%20Academy%20Image/IconosRecursos/AvatarProfile_iudmkb.jpg',
    correo: '',
    fechaNacimiento: '',
    carrera: '',
    ciudad: '', 
    departamento: '', 
    pais: '',
    telefono: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    twitter: '',
    descripcion: '',
    habilidades: [],
    idiomas: [],
    extracurricular: [],
    experiencia: [],
    curriculumLink: '' 
}

export const authReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName,
                userProfile: action.payload.profile
            }
        case types.authLogout:
            return {}
        default:
            return state;
    }
}