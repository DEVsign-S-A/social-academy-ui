import { types } from "../Types/type";
import { db } from "../../firebase/firebase-config";

export const startLoadingInterships = () => {
	return async (dispatch) => {
		const infoBussines = [];

		const infoSnapGeneral = await db
			.collection(`/Pasantias/Publicacion/Data/`)
			.get();

		infoSnapGeneral.forEach((snap) => {
			infoBussines.push({
				id: snap.id,
				...snap.data(),
			});
		});

		// console.log(infoBussines);
		dispatch(LoadInterships(infoBussines));
	};
};

export const startResponseInterships = (IdIntership, loadInter) => {
	return async (dispatch, getState) => {
		const {
			uid,
			nombreUsuario,
			fotoPerfil,
			correo,
			fechaNacimiento,
			fechaCreacion,
			carrera,
			ciudad,
			departamento,
			pais,
			telefono,
			linkedin,
			facebook,
			instagram,
			twitter,
			descripcion,
			habilidades,
			idiomas,
			extracurricular,
			experiencia,
			curriculumLink,
		} = getState().auth;

		const newResponse = {
			uid,
			nombreUsuario,
			fotoPerfil,
			correo,
			fechaNacimiento,
			fechaCreacion,
			carrera,
			ciudad,
			departamento,
			pais,
			telefono,
			linkedin,
			facebook,
			instagram,
			twitter,
			descripcion,
			habilidades,
			idiomas,
			extracurricular,
			experiencia,
			curriculumLink,
			Fecha: new Date().getTime(),
		};
		// console.log(newResponse);
		let { solictudesRespustas } = loadInter;

		if (solictudesRespustas[0] === "") {
			solictudesRespustas.push(newResponse);
		} else {
			solictudesRespustas = [...solictudesRespustas, newResponse];
		}

		const usuariosRef = db.collection("Pasantias/Publicacion/Data");
		await usuariosRef.doc(IdIntership).update({
			solictudesRespustas: solictudesRespustas,
		});
	};
};

export const startDeleteResponseInterships = (
	IdIntership,
	loadInter,
	indexArray
) => {
	return async () => {
		let { solictudesRespustas } = loadInter;

		solictudesRespustas.splice(indexArray, 1);
		// console.log(solictudesRespustas);
		const usuariosRef = db.collection("Pasantias/Publicacion/Data");
		await usuariosRef.doc(IdIntership).update({
			solictudesRespustas: solictudesRespustas,
		});
	};
};

const LoadInterships = (data) => ({
	type: types.loadIntership,
	payload: data,
});
