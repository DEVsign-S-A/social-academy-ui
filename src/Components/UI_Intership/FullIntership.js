import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "../Tailwind/Grid";
import { Div, P, Li } from "../Tailwind/IntershipComponets";
/* 
    Images
 */
import back from "../../assets/UI_Forum/Arrow-Left.svg";
import send from "../../assets/UI_Intership/Send.svg";
import del from "../../assets/UI_Intership/Delete.svg";
import Mail from "../../assets/UI_Intership/Mail.svg";
import Smartphone from "../../assets/UI_Intership/Smartphone.svg";
import pin from "../../assets/UI_Intership/Pin.svg";
import buil from "../../assets/UI_Intership/buil.svg";
import { Footer } from "../UI_Footer/Footer";
import {
	startDeleteResponseInterships,
	startResponseInterships,
} from "../../Redux/Actions/intershipsActions";
import moment from "moment";
import { getBusinessById } from "../../Redux/Actions/businessActions";
import { ProfileDrawerEnterprise } from "../UI_PymeProfile/ProfileDrawerEnterprise";

export const FullIntership = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { IdIntership } = useParams();

	const { interships } = useSelector((state) => state.intership);
	const { uid } = useSelector((state) => state.auth);

	const loadInter = interships.find((inter) => inter.id === IdIntership);

	const {
		Carreras,
		DescripcionBreve,
		DescripcionLarga,
		Educacion,
		Habilidades,
		Jornada,
		Puesto,
		Salario,
		Titulo,
		solictudesRespustas,
		EmpresaInfo,
		EnterpriseID,
	} = loadInter;

	const {
		nombreEmpresa,
		telefono,
		direccion,
		email,
		fotoPerfil,
	} = EmpresaInfo;

	const uidValidate = solictudesRespustas.find((idUser) => idUser.uid === uid);

	const indexArray = solictudesRespustas.indexOf(uidValidate);

	const handleBack = () => {
		history.push("/Pasantias");
	};

	const handleInterShip = () => {
		dispatch(startResponseInterships(IdIntership, loadInter));
		setTimeout(() => {
			history.push("/Pasantias");
		}, 600);
	};

	const HandleRemove = () => {
		dispatch(startDeleteResponseInterships(IdIntership, loadInter, indexArray));
		setTimeout(() => {
			history.push("/Pasantias");
		}, 600);
	};

	const [pDrawer, setPDrawer] = useState(false);

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

	const viewEnterprise = async () => {
		await dispatch(getBusinessById(EnterpriseID));
		// console.log(EnterpriseID);

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

	return (
		<>
			<br />
			<br />
			<br />
			<div>
				<ProfileDrawerEnterprise
					onCloseDrawer={onCloseDrawer}
					pDrawer={pDrawer}
					idUsuario={EnterpriseID}
					screen={screen}
				/>
				<Grid $grid_primary_container>
					<div className="grid grid-cols-4 gap-3 my-2">
						<div className="mx-3 my-2 flex items-center flex-col border-r-2 border-gray-300">
							<img
								src={fotoPerfil}
								alt={nombreEmpresa}
								className="rounded-full w-36 ring-2 ring-gray-300 p-2 cursor-pointer"
								onClick={viewEnterprise}
							/>

							<Div $littelContainer>
								<img src={buil} alt="buil" className="mx-2" />
								<P $textIntership>
									<strong>Nombre del negocio: </strong>
									{nombreEmpresa}
								</P>
							</Div>
							<Div $littelContainer>
								<img src={pin} alt="buil" className="mx-2" />
								<P $textIntership>
									<strong>Dirección: </strong>
									{direccion}
								</P>
							</Div>
							<Div $littelContainer>
								<img src={Smartphone} alt="Smartphone" className="mx-2" />
								<P $textIntership>
									<strong>telf: </strong>
									{telefono}
								</P>
							</Div>
							<Div $littelContainer>
								<img src={Mail} alt="Mail" className="mx-2" />
								<P $textIntership>
									<strong>Correo: </strong>
									{email}
								</P>
							</Div>
						</div>
						<div className="col-span-3">
							<div>
								<div className="flex justify-between">
									<P $titleIntership>{Titulo}</P>
									<button
										className="flex outline-none px-3 py-2 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer float-right"
										onClick={handleBack}
									>
										<img src={back} alt="back" className="mt-2 mx-2" />
										Regresar
									</button>
								</div>

								<div>
									<br />

									<P $bodyIntership>
										<strong>Descrpción: </strong>
										{DescripcionBreve}
									</P>
									<br />
									<P $bodyIntership>
										<strong>Detalles Generales: </strong>
										{DescripcionLarga}
									</P>
									<br />

									<P $bodyIntership>
										<strong>Habilidades Requeridas: </strong>
									</P>
									{Habilidades.map((req) => (
										<Li $textIntership>{req.skill}</Li>
									))}
									<br />
									<P $bodyIntership>
										<strong>Educacion y Experecia: </strong>
									</P>
									{Educacion.map((edu) => (
										<Li $textIntership>{edu.education}</Li>
									))}
								</div>
								<div>
									<br />
									<P $bodyIntership>
										<strong>Puesto de Trabajo: </strong>
										{Puesto}
									</P>
									<br />
									<P $bodyIntership>
										<strong>Carreras Asociadas: </strong>
									</P>
									{Carreras.map((car) => (
										<Li $textIntership>{car.career}</Li>
									))}
									<br />
									<P $bodyIntership>
										<strong>Jornada Laboral: </strong>
										{Jornada}
									</P>
									<br />
									<P $bodyIntership>
										<strong>Salario: </strong>
										{Salario}
									</P>
								</div>
							</div>
						</div>

						{uidValidate ? (
							<>
								<P $bodyIntership>
									&nbsp; &nbsp; &nbsp;
									<strong className="text-xl">
										Ya has aplicado a esta pasantia
									</strong>
								</P>
								<button
									onClick={HandleRemove}
									className="flex font-Poppins text-sm bg-second text-white font-medium shadow-lg cursor-pointer rounded-lg mx-3 justify-center items-center"
								>
									<img src={del} alt="send" className="mx-2" />
									<p className="mt-3">Eliminar Solicitud </p>
								</button>
							</>
						) : (
							<button
								onClick={handleInterShip}
								className="flex font-Poppins text-sm bg-BlueSocial text-white font-medium shadow-lg cursor-pointer px-3  rounded-lg mx-3 justify-center items-center"
							>
								<img src={send} alt="send" className="mx-2" />
								<p className="mt-1">Aplicar</p>
							</button>
						)}
					</div>
				</Grid>
			</div>

			<Footer />
		</>
	);
};
