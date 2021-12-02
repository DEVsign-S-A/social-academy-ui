import { Popover } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Like from "../../assets/UI_Forum/Like.svg";
import Trash from "../../assets/UI_Intership/Delete.svg";
import { startDeleteAnswer } from "../../Redux/Actions/forumActions";
import { getUserInfo } from "../../Redux/Actions/userInfoActions";
import { ProfileDrawer } from "../UI_MyProfile/ProfileDrawer";
import { AiOutlineClockCircle } from "react-icons/ai";
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

	let windowWidth = window.innerWidth;
	let screen;

	const kevin = (window.mobileAndTabletCheck = function () {
		let check = false;
		(function (a) {
			if (
				/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
					a
				) ||
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
					a.substr(0, 4)
				)
			)
				check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	});

	if (kevin()) {
		screen = Math.round(windowWidth / 1.5);
	} else {
		screen = Math.round(windowWidth / 2.5);
	}

	const handlePerfil = () => {
		dispatch(getUserInfo(uid));
		setTimeout(() => {
			showDrawer();
		}, 200);
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
						idUsuario={uid}
						screen={screen}
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
									<div className="flex">
										<AiOutlineClockCircle className="text-gray-600 mr-2" />
										<p className="font-Poppins text-xs text-gray-400">
											{noteDate.startOf("hour").fromNow()}
										</p>
									</div>
								</div>
							</div>
							{uid === idUsuario && (
								<div className='pl-10 md:p-0'>
								<button
								className="bg-second flex justify-center items-center px-3 m-2 rounded-md shadow-sm text-WhiteSocial text-sm font-Poppins font-medium"
								onClick={handelDelete}
							>
								<img src={Trash} alt="del" className="m-2 md:m-0" />
								<p className="hidden md:flex mt-2">&nbsp; Eliminar</p>
							</button>
							</div>
							)}
						</div>
						<p className="font-Poppins text-gray-500 text-sm font-normal mx-8 py-2">
							{BodyAnswer}
						</p>
						<div className="flex mx-8 py-5">
							<img src={Like} alt={Like} className="cursor-pointer" />
							<p className="mx-2 font-Poppins text-gray-500 text-sm font-normal"></p>
						</div>
					</div>
				</>
			)}
		</>
	);
};
