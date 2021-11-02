import Swal from "sweetalert2";
import { types } from "../Types/type";
import { db } from "../../firebase/firebase-config";

export const startNewQuestion = (title, labelCategory, bodyQuestion) => {
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
			const newQuestion = {
				Usuario: {
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
				},
				Titulo: title,
				Categoria: labelCategory,
				ContenidoPregunta: bodyQuestion,
				Respuestas: [],
				Fecha: new Date().getTime(),
			};

			await db.collection(`/Foros/Publicacion/Data`).add(newQuestion);

			Swal.fire("Foros", "Has publiacado tu pregunta con éxito", "success");
		} catch (error) {
			console.log(error);
		}
	};

	///Foros/Publicacion/Data
};

export const startLoadingForum = () => {
	return async (dispatch) => {

		const infoForum = [];

		const infoSnapGeneral = await db
			.collection(`/Foros/Publicacion/Data/`)
			.get();

		infoSnapGeneral.forEach((snap) => {
			infoForum.push({
				id: snap.id,
				...snap.data(),
			});
		});

		// console.log(infoForum);
		dispatch(loadForum(infoForum));
	};
};



export const toogleQuestion = (id) => ({
	type: types.activeQuestion,
	payload: id,
});

const loadForum = (data) => ({
	type: types.loadQuestions,
	payload: data,
});
