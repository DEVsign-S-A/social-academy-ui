import React from "react";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
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
	} = loadInter;
	const { NombreComercial, Telefono, Correo } = EmpresaInfo[0];
	const { Direccion } = EmpresaInfo[1];

	const uidValidate = solictudesRespustas.find((idUser) => idUser.uid === uid);

	const indexArray = solictudesRespustas.indexOf(uidValidate);

	const handleBack = () => {
		history.push("/Pasantias");
	};

	const handleInterShip = () => {
		dispatch(startResponseInterships(IdIntership, loadInter));
		Swal.fire("Pasantía", "Has Aplicado con éxito", "success");
		setTimeout(() => {
			history.push("/Pasantias");
		}, 600);
	};

	const HandleRemove = () => {
		dispatch(startDeleteResponseInterships(IdIntership, loadInter, indexArray));
		Swal.fire("Pasantía", "Has Removido tu solicitud con éxito", "success");
		setTimeout(() => {
			history.push("/Pasantias");
		}, 600);
	};

	return (
		<>
			<br />
			<br />
			<br />
			<div>
				<Grid $grid_primary_container>
					<div className="grid grid-cols-4 gap-3 my-2">
						<div className="mx-3 my-2 flex items-center flex-col border-r-2 border-gray-300">
							{
								// <img
								// 	src={Company.ProfilePhoto}
								// 	alt={NombreComercial}
								// 	className="rounded-full w-36 ring-1 ring-gray-300"
								// />
							}

							<Div $littelContainer>
								<img src={buil} alt="buil" className="mx-2" />
								<P $textIntership>
									<strong>Nombre del negocio: </strong>
									{NombreComercial}
								</P>
							</Div>
							<Div $littelContainer>
								<img src={pin} alt="buil" className="mx-2" />
								<P $textIntership>
									<strong>Dirección: </strong>
									{Direccion}
								</P>
							</Div>
							<Div $littelContainer>
								<img src={Smartphone} alt="Smartphone" className="mx-2" />
								<P $textIntership>
									<strong>telf: </strong>
									{Telefono}
								</P>
							</Div>
							<Div $littelContainer>
								<img src={Mail} alt="Mail" className="mx-2" />
								<P $textIntership>
									<strong>Correo: </strong>
									{Correo}
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
									className="flex font-Poppins text-sm bg-second text-white font-medium shadow-lg cursor-pointer rounded-lg py-3 mx-3 justify-center items-center"
								>
									<img src={del} alt="send" className="mx-1" />
									<p>Eliminar Solicitud </p>
								</button>
							</>
						) : (
							<button
								onClick={handleInterShip}
								className="flex font-Poppins text-sm bg-BlueSocial text-white font-medium shadow-lg cursor-pointer px-3 py-3 rounded-lg mx-3 justify-center items-center"
							>
								<img src={send} alt="send" className="mx-1" />
								<p>Aplicar</p>
							</button>
						)}
					</div>
				</Grid>
			</div>

			<Footer />
		</>
	);
};
