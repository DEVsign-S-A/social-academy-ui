import React from "react";
import ReactHtmlParser from "react-html-parser";
import moment from 'moment';
import "moment/locale/es-do";
import { Grid } from "../Tailwind/Grid";
import label from "../../assets/UI_Forum/Tag.svg";
import Like from "../../assets/UI_Forum/Like.svg";
import Chat from "../../assets/UI_Forum/Chat.svg";
import { Answers } from "./Answers";
import { PostAnsewrs } from "./postAnsewrs";
import { useDispatch } from "react-redux";
import { toogleQuestion } from "../../Redux/Actions/forumActions";
export const Questions = ({
	Usuario,
	id,
	Titulo,
	Categoria,
	ContenidoPregunta,
	Fecha,
	Respuestas,
}) => {

  console.log(Fecha);

	const dispatch = useDispatch();
	const handleViewAnswer = () => {
		dispatch(toogleQuestion(id));
	};

  const noteDate = moment(Fecha);

	return (
		<>
			<div className="w-11/12 ml-12 select-none p-0">
				<Grid $grid_primary_container>
					<div className="flex m-5 p-5 justify-between">
						<div className="flex ">
							<img
								className="w-16 rounded-2xl"
								src={Usuario.fotoPerfil}
								alt={Usuario.NanombreUsuariome}
							/>
							<div className="mx-4">
								<p className="font-Poppins text-gray-600 font-medium">
									{Usuario.nombreUsuario}
								</p>
								<p className="font-Poppins text-gray-400 text-sm">
                {noteDate.startOf('hour').fromNow()}
                </p>
							</div>
						</div>
						<div className="flex">
							<p className="font-Poppins text-gray-400 text-sm mt-3 mx-3">
								{Categoria}
							</p>
							<img src={label} alt="label" />
						</div>
					</div>

					<p className="mx-8 font-Poppins text-gray-600 font-medium">
						Titulo: &nbsp;
						<span className="font-Poppins text-gray-500 text-sm font-normal">
							{Titulo}
						</span>
					</p>
					<div></div>
					<br />
					<p className="mx-8 font-Poppins text-gray-600 font-medium">
						Contenido: &nbsp;
						<span className="font-Poppins text-gray-500 text-sm font-normal">
							{ReactHtmlParser(ContenidoPregunta)}
						</span>
					</p>
					<div className="flex m-8">
						<div className="flex mx-5">
							<img src={Like} alt={Like} className="cursor-pointer" />
							{
								//   <p className="mx-2 font-Poppins text-gray-500 text-sm font-normal">
								//   {Likes}
								// </p>
							}
						</div>
						<div className="flex mx-5">
							<img src={Chat} alt={Chat} className="cursor-pointer" />
							<p className="mx-2 font-Poppins text-gray-500 text-sm font-normal">
								{Respuestas.length}
							</p>

							<p
								onClick={handleViewAnswer}
								className="mx-8 font-Poppins text-BlueSocial text-sm font-medium cursor-pointer"
							>
								Ver Respuestas
							</p>
						</div>
					</div>
					<PostAnsewrs />
					{
						//   Respuestas.map((answers) => (
						//   <Answers key={answers.id} {...answers} id={id}/>
						// ))
					}
				</Grid>
			</div>
		</>
	);
};
