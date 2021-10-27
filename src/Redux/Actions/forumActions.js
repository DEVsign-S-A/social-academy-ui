import { types } from "../Types/type";

export const startNewQuestion = (title, labelCategory, bodyQuestion) => {
  return async (dispatch, getState) => {
    const { uid, nombreUsuario } = getState().auth;


    const newQuestion = {
        IdUsuario: uid,
        NombreUsuario: nombreUsuario,
        Titulo: title,
        Categoria: labelCategory,
        ContenidoPregunta: bodyQuestion,
        Respuestas: [],
        Fecha: new Date().getTime(),
      };
      console.log(uid, nombreUsuario, newQuestion);
  };
};

export const toogleQuestion = (id) => ({
  type: types.activeQuestion,
  payload: id,
});
