import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Grid } from "../Tailwind/Grid";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
//image
import back from "../../assets/UI_Forum/Arrow-Left.svg";
import { Footer } from "../UI_Footer/Footer";
import { useForm } from "../../Hook/useForm";
import { startUpdateQuestion } from "../../Redux/Actions/forumActions";

export const EditQuestion = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { idQuestion } = useParams();

	const { QuestionsForum } = useSelector((state) => state.forum);
	const thisQuestion = QuestionsForum.find(
		(question) => question.id === idQuestion
	);
	// console.log(thisQuestion);
	const { ContenidoPregunta, Titulo, Categoria } = thisQuestion;
	const bodyQuestion = ReactHtmlParser(ContenidoPregunta);

	const [formValues, handleInputChange] = useForm({
		title: Titulo,
		labelCategory: Categoria,
	});

	const { title, labelCategory } = formValues;

	const [body, setBody] = useState(bodyQuestion);

	const onChangeBody = (e, editor) => {
		const data = editor.getData();
		setBody(data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startUpdateQuestion(idQuestion, title, labelCategory, body));
		// console.log(title, labelCategory, body);

		setTimeout(() => {
			history.push("/Foros");
		}, 1000);
	};

	const handleBack = () => {
		history.push("/Foros");
	};

	return (
		<>
			{thisQuestion && (
				<>
					<br />
					<br />
					<br />
					<br />
					<br />

					<div className="flex justify-between">
						<h1 className="text-gray-700 font-Poppins font-semibold text-2xl ml-3">
							Formula un Pregunta
						</h1>

						<button
							className="flex outline-none p-3 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer"
							onClick={handleBack}
						>
							<img src={back} alt="back" className="mt-2 mx-2" />
							Regresar
						</button>
					</div>

					<Grid $grid_primary_container>
						<form onSubmit={handleSubmit}>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Título
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Se específico e imagina que estás haciendo la pregunta a otra
									persona
								</p>
								<input
									required={true}
									name="title"
									value={title}
									onChange={handleInputChange}
									className="ml-5  lg:mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Etiquetas
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Añade la categoria a la cual corresponde tu pregunta
								</p>
								<select
									name="labelCategory"
									onChange={handleInputChange}
									className="ml-5  lg:mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
								>
									<option key={1} value={"Programación"}>
										Programación
									</option>
									<option key={2} value={"Diseño"}>
										Diseño
									</option>
									<option key={3} value={"Economia"}>
										Economia
									</option>
									<option key={4} value={"Finanzas"}>
										Finanzas
									</option>
								</select>
							</div>
							<div className="my-2 py-2 mx-3">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Cuerpo
								</p>
								<div className="flex justify-between">
									<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
										Incluye toda la información que alguien necesita para
										responder tu pregunta
									</p>
									{/* <input type="submit" value="Agrega una Imagen"
                className="p-3 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer"
             /> */}
								</div>
								<CKEditor
									editor={ClassicEditor}
									onChange={onChangeBody}
									value={body}
								/>
							</div>
							<input
								type="submit"
								className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white"
								value="Guardar"
								onClick={handleSubmit}
							/>
						</form>
					</Grid>
					<Footer />
				</>
			)}
		</>
	);
};
