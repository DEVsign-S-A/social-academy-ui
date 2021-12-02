import { types } from "../Types/type";

export const businessReducer = (state = {}, action) =>{
    switch (action.type) {
        case types.businessExists:
            return {
                ...state,
                uid: action.payload.uid,
				nombreEmpresa: action.payload.nombreEmpresa,
				email: action.payload.email,
				fotoPerfil: action.payload.fotoPerfil,
				sectorComercial: action.payload.sectorComercial,
				telefono: action.payload.telefono,
				celular: action.payload.celular,
				fechaCreacion: action.payload.fechaCreacion,
				descripcion: action.payload.descripcion,
				direccion: action.payload.direccion,
				tipoCompannia: action.payload.tipoCompannia,
				datosLaborales: action.payload.datosLaborales,
				extras: action.payload.extras,
            }
        case types.businessDoesnot:
            return null

        default:
            return state;
    }
}