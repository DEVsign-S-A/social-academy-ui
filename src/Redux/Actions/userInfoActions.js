import Swal from 'sweetalert2';
import {db} from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { fileUploadFirestore } from '../../helpers/fileUploadFirestore';
import { retornaDocumentos } from '../../helpers/retornaDocumentos';
import { types } from '../Types/type';
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
            await db.collection(`UsuarioAcademico`).doc(`${uid}`).set(newUser);
        } catch (e) {
            console.log(e);
        }
    }
}

export const updateUserProfile = (userInfo) => {
    return async (dispatch) =>{
        try {
            Swal.fire({
                title: 'Espere',
                text: 'Actualizando perfil',
                allowOutsideClick: false,
                didOpen: ()=>{
                    Swal.showLoading();
                }
            });
            const {uid} = userInfo;
            const usuariosRef = db.collection("UsuarioAcademico");
            await usuariosRef.doc(uid).set(userInfo);
            dispatch(activeUser(uid));
            Swal.close();
        } catch (e) {
            console.log(e);
        }
    }
}

export const startUploadNewPhoto = (file, uid) =>{
    return async (dispatch) =>{
        Swal.fire({
            title: 'Espere',
            text: 'Subiendo foto',
            allowOutsideClick: false,
            didOpen: ()=>{
                Swal.showLoading();
            }
        });

        const photoURL = await fileUpload(file);
        const usuariosRef = db.collection("UsuarioAcademico");
        await usuariosRef.doc(uid).update({
            fotoPerfil: photoURL
        });
        dispatch(activeUser(uid));
        Swal.close();
    }
}

export const startUploadNewCurriculum = (file, uid) =>{
    return async (dispatch) =>{
        Swal.fire({
            title: 'Espere',
            text: 'Subiendo foto',
            allowOutsideClick: false,
            didOpen: ()=>{
                Swal.showLoading();
            }
        });
        const curriculumURL = await fileUploadFirestore(file, "Curriculums");

        if(curriculumURL){
            const usuariosRef = db.collection("UsuarioAcademico");
            await usuariosRef.doc(uid).update({
                curriculumLink: curriculumURL
            });
        }

        dispatch(activeUser(uid));
        Swal.close();
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

export const existeUsuario = async (uid) =>{
    const usuariosRef = db.collection("UsuarioAcademico");
    const usuarios = usuariosRef.where("uid", "==", uid).get().then(retornaDocumentos);
    const existe = await usuarios.then(resolve=> {return resolve});
    if(existe.length === 0){
        return false;
    }else if (existe.length > 0){
        return true;
    }
}

export const getUserInfo = (uid) =>{
    return async (dispatch) =>{
        
        const usuariosRef = db.collection("UsuarioAcademico");
        const usuarioInfo = usuariosRef.where("uid", "==", uid).get().then(retornaDocumentos);
        const usuario = await usuarioInfo.then(resolve => {return resolve})
        if(usuario.length === 0){
            dispatch(userDoesNotExist());
        }else{
            const user = usuario[0]
            dispatch(userExists(user));
        }
    }
}

export const userExists = (userInfo) =>({
    type: types.userExists,
    payload: {
        ...userInfo
    }
});

export const userDoesNotExist = () =>({
    type: types.userDoesnot
})