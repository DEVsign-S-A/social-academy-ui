import { Popover } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Like from "../../assets/UI_Forum/Like.svg";
import Trash from "../../assets/UI_Intership/Delete.svg";
import { startDeleteAnswer } from "../../Redux/Actions/forumActions";
import { getUserInfo } from "../../Redux/Actions/userInfoActions";
import { ProfileDrawer } from "../UI_MyProfile/ProfileDrawer";

export const Answers = ({
	nombreUsuario,
	idAnswer,
	uid,
	fotoPerfil,
	carrera, 
	correo, 
	ciudad,
	BodyAnswer,
	Fecha,
	idQuestion,
}) => {
	const dispatch = useDispatch();
	const noteDate = moment(Fecha);
	const { uid: idUsuario } = useSelector((state) => state.auth);
	const [pDrawer, setPDrawer] = useState(false);

	const { toogleAnswers, QuestionsForum } = useSelector((state) => state.forum);
	const loadAnswer = QuestionsForum.find((inter) => inter.id === idQuestion);

	const handelDelete = () => {
		const { Respuestas } = loadAnswer;
		const uidValidate = Respuestas.find(
			(idUser) => idUser.idAnswer === idAnswer
		);
		const indexArray = Respuestas.indexOf(uidValidate);
		Respuestas.splice(indexArray, 1);

		dispatch(startDeleteAnswer(idQuestion, Respuestas));
	};

	const handlePerfil = () => {
		dispatch(getUserInfo(idUsuario));
		setTimeout(() => {
			showDrawer();
		}, 500);
	};

	const showDrawer = () => {
		setPDrawer(true);
	};

	const onCloseDrawer = () => {
		setPDrawer(false);
	};

	const content = (
		<div>
			<p>
				<strong>Carrera: </strong>
				{carrera}
			</p>
			<p>
				<strong>Correo: </strong>
				{correo}
			</p>
			<p>
				<strong>Ciudad: </strong>
				{ciudad}
			</p>
			<a onClick={handlePerfil}>Ver perfil</a>
		</div>
	);

	return (
		<>
			{idQuestion === toogleAnswers && (
				<>
					<ProfileDrawer
						onCloseDrawer={onCloseDrawer}
						pDrawer={pDrawer}
						idUsuario={idUsuario}
					/>
					<div className="bg-gray-50 ring-1 ring-gray-200 mx-10 my-8 rounded-md shadow-sm">
						<div className="flex justify-between mx-8 py-3">
							<div className="flex">
								<Popover
									content={content}
									title={nombreUsuario}
									trigger="click"
									className="cursor-pointer"
								>
									<img
										className="w-16 h-16 rounded-2xl"
										src={fotoPerfil}
										alt={nombreUsuario}
									/>
								</Popover>

								<div className="mx-4">
									<p className="font-Poppins text-sm text-gray-600 font-medium">
										{nombreUsuario}
									</p>
									<p className="font-Poppins text-xs text-gray-400">
										{noteDate.startOf("hour").fromNow()}
									</p>
								</div>
							</div>
							{uid === idUsuario && (
								<button
									className="bg-second flex justify-center items-center px-3 py-2 rounded-md shadow-sm text-WhiteSocial text-sm font-Poppins font-medium"
									onClick={handelDelete}
								>
									<img src={Trash} alt="del" />
									&nbsp; eliminar
								</button>
							)}
						</div>
						<p className="font-Poppins text-gray-500 text-sm font-normal mx-8 py-2">
							{BodyAnswer}
						</p>
						<div className="flex mx-8 py-5">
							<img src={Like} alt={Like} className="cursor-pointer" />
							<p className="mx-2 font-Poppins text-gray-500 text-sm font-normal">
								{"5"}
							</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};
