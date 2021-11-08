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

export const startRequestAnswer = (BodyAnswer, idQuestion, idAnswer) => {
	return async (dispatch, getState) => {
		const { uid, nombreUsuario, fotoPerfil } = getState().auth;
		const { QuestionsForum } = getState().forum;
		const question = QuestionsForum.find(
			(question) => question.id === idQuestion
		);

		const NewAnswer = {
			idAnswer,
			uid,
			nombreUsuario,
			fotoPerfil,
			idQuestion,
			BodyAnswer,
			Fecha: new Date().getTime(),
		};

		let { Respuestas } = question;
		if (Respuestas.length === 0) {
			Respuestas.push(NewAnswer);
		} else {
			Respuestas = [...Respuestas, NewAnswer];
		}

		try {

			await db.doc(`/Foros/Publicacion/Data/${idQuestion}`).update({
				Respuestas: Respuestas
			});

			Swal.fire("Foros", "Has respondido a la pregunta con éxito", "success");
			dispatch(startLoadingForum());

		} catch (error) {
			console.log(error);
		}
	};
};

export const startUpdateQuestion = (id, title, labelCategory, bodyQuestion) => {
	return async (dispatch, getState) => {
		try {
			const usuariosRef = db.collection("/Foros/Publicacion/Data");
			await usuariosRef.doc(id).update({
				Titulo: title,
				Categoria: labelCategory,
				ContenidoPregunta: bodyQuestion,
			});
			Swal.fire("Foros", "Has acutailizado tu pregunta con éxito", "success");
		} catch (error) {
			console.log(error);
		}
	};
};

export const startDeleteQuestion = (idQuestion, indexArray) => {
	return async (dispatch, getState) => {
		const { QuestionsForum } = getState().forum;
		QuestionsForum.splice(indexArray, 1);

		try {
			const usuariosRef = db.collection("/Foros/Publicacion/Data");
			await usuariosRef.doc(idQuestion).delete();
			Swal.fire("Foros", "Has eliminado tu pregunta con éxito", "success");
			dispatch(loadForum(QuestionsForum));
		} catch (error) {
			Swal.fire("Error", error, "warning");
		}
	};
};

export const startDeleteAnswer = (idQuestion, Respuestas) => {
	return async (dispatch) => {
		try {
			const usuariosRef = db.collection("/Foros/Publicacion/Data");
			await usuariosRef.doc(idQuestion).update({
				Respuestas: Respuestas
			});
			Swal.fire("Foros", "Has eliminado tu pregunta con éxito", "success");
			dispatch(startLoadingForum());
		} catch (error) {
			Swal.fire("Error", error, "warning");
		}
	};
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
