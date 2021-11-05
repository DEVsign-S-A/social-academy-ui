import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import Like from "../../assets/UI_Forum/Like.svg";

export const Answers = ({
	nombreUsuario,
	uid,
	fotoPerfil,
	BodyAnswer,
	Fecha,
	idQuestion,
}) => {
	const noteDate = moment(Fecha);

	const { toogleAnswers } = useSelector((state) => state.forum);
	return (
		<>
			{idQuestion === toogleAnswers && (
				<div className="bg-gray-50 ring-1 ring-gray-200 mx-10 my-8 rounded-md shadow-sm">
					<div className="flex mx-8 py-3">
						<img
							src={fotoPerfil}
							alt={nombreUsuario}
							className="w-10 rounded-md"
						/>
						<div className="mx-4">
							<p className="font-Poppins text-sm text-gray-600 font-medium">
								{nombreUsuario}
							</p>
							<p className="font-Poppins text-xs text-gray-400">
								{noteDate.startOf("hour").fromNow()}
							</p>
						</div>
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
			)}
		</>
	);
};
