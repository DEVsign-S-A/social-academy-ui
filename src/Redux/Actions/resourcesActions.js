import { db } from "../../firebase/firebase-config";
import Swal from 'sweetalert2';
import { fileUploadFirestore } from "../../helpers/fileUploadFirestore";
import { types } from "../Types/type";

export const uploadNewVideo = (videoInfo) =>{
    return async () =>{
        try {
            Swal.fire({
                title: 'Espere',
                text: 'Subiendo recurso',
                allowOutsideClick: false,
                didOpen: ()=>{
                    Swal.showLoading();
                }
            });
            const uploaded = await db.collection('recursosAcademicos').add(videoInfo);
            await db.collection('recursosAcademicos').doc(uploaded.id).update({
                rid: uploaded.id
            });
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Video compartido con éxito'
              })
        } catch (error) {
            console.log(error);
        }
    }
}

export const uploadNewDocument = (infoFile, file) =>{
    return async () =>{
        try {
            Swal.fire({
                title: 'Espere',
                text: 'Subiendo archivo',
                allowOutsideClick: false,
                didOpen: ()=>{
                    Swal.showLoading();
                }
            });
            const fileURL = await fileUploadFirestore(file, "Files");
            if(fileURL){
                const newFile = {
                    ...infoFile,
                    link: fileURL
                }
                const uploaded = await db.collection('recursosAcademicos').add(newFile);
                await db.collection('recursosAcademicos').doc(uploaded.id).update({
                    rid: uploaded.id
                });
            }

            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Archivo compartido con éxito'
              })
        } catch (error) {
            console.log(error);
        }
    }
} 

export const startLoadingResources = () =>{
    return async (dispatch) =>{
        try {
            const resources = [];
            const snapshot = await db.collection('recursosAcademicos').get();
            snapshot.forEach((snapHijo) =>{
                resources.push({
                    rid: snapHijo.rid,
                    ...snapHijo.data()
                })
            });
            dispatch(loadResources(resources));
        } catch (error) {
            console.log(error);
        }
    }
}

export const loadResources = (data) =>({
    type: types.loadResources,
    payload: data
})