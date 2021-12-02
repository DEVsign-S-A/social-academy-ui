import { db } from "../../firebase/firebase-config";
import { retornaDocumentos } from "../../helpers/retornaDocumentos";
import { types } from "../Types/type";

export const getBusinessById = (uid) =>{
    return async (dispatch) =>{
        const usuariosRef = db.collection("Enterprises");
        const usuarioInfo = usuariosRef.where("uid", "==", uid).get().then(retornaDocumentos);
        const usuario = await usuarioInfo.then(resolve => {return resolve})
        if (usuario.length === 0) {
            dispatch(businessDoesnot());
        } else {
            const user = usuario[0];
            dispatch(businessExists(user));
        }
    }
}

export const businessExists = (businessInfo) =>({
    type: types.businessExists,
    payload: {
        ...businessInfo
    }
})

export const businessDoesnot = () =>({
    type: types.businessDoesnot
})