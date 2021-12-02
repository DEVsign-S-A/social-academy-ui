import { types } from "../Types/type";
import { db } from "../../firebase/firebase-config";
import Swal from "sweetalert2";

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

		try {
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

			Swal.fire("Pasantía", "Has Aplicado con éxito", "success");
		} catch (error) {
			console.log(error);
		}
	};
};

export const startDeleteResponseInterships = (
	IdIntership,
	loadInter,
	indexArray
) => {
	return async () => {
		try {
			let { solictudesRespustas } = loadInter;

			solictudesRespustas.splice(indexArray, 1);
			// console.log(solictudesRespustas);
			const usuariosRef = db.collection("Pasantias/Publicacion/Data");
			await usuariosRef.doc(IdIntership).update({
				solictudesRespustas: solictudesRespustas,
			});
			Swal.fire("Pasantía", "Has Removido tu solicitud con éxito", "success");
		} catch (error) {
			console.log(error);
		}
	};
};

const LoadInterships = (data) => ({
	type: types.loadIntership,
	payload: data,
});
