import { types } from "../Types/type";
const initialState = {}

export const authReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                uid: action.payload.uid,
                nombreUsuario: action.payload.nombreUsuario,
                fotoPerfil: action.payload.fotoPerfil,
                correo: action.payload.correo,
                fechaNacimiento: action.payload.fechaNacimiento,
                fechaCreacion: action.payload.fechaCreacion,
                carrera: action.payload.carrera,
                ciudad: action.payload.ciudad, 
                departamento: action.payload.departamento, 
                pais: action.payload.pais,
                telefono: action.payload.telefono,
                linkedin: action.payload.linkedin,
                facebook: action.payload.facebook,
                instagram: action.payload.instagram,
                twitter: action.payload.twitter,
                descripcion: action.payload.descripcion,
                habilidades: action.payload.habilidades,
                idiomas: action.payload.idiomas,
                extracurricular: action.payload.extracurricular,
                experiencia: action.payload.experiencia,
                curriculumLink: action.payload.curriculumLink
            }
        case '[AUTH] Logout':
            return {}
        default:
            return state;
    }
}