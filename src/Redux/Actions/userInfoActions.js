import swal from 'sweetalert2';
import {db} from '../../firebase/firebase-config';
import { retornaDocumentos } from '../../helpers/retornaDocumentos';
import {types} from '../Types/type';
import { login } from './authActions';

export const createNewProfile = (uid, name, email) =>{
    return async (dispatch, getState) =>{
        const newUser = {
            uid: uid,
            nombreUsuario: name,
            fotoPerfil: 'https://res.cloudinary.com/socialacademy/image/upload/v1635096147/Social%20Academy%20Image/IconosRecursos/AvatarProfile_iudmkb.jpg',
            correo: email,
            fechaNacimiento: '',
            fechaCreacion: new Date().getTime(),
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
            idiomas: ['Español'],
            extracurricular: [],
            experiencia: [],
            curriculumLink: '' 
        }
        try {
            const doc = await db.collection(`UsuarioAcademico`).doc(`${uid}`).set(newUser);
        } catch (e) {
            console.log(e);
        }
    }
}

export const activeUser = (uid) =>{
    return async (dispatch) =>{
        try {
            const usuariosRef = db.collection("UsuarioAcademico");
            const usuarioActivo = await usuariosRef.where("uid", "==", uid).get().then(retornaDocumentos);
            dispatch(login(usuarioActivo[0]));
        } catch (e) {
            console.log(e);
        }
    }
}