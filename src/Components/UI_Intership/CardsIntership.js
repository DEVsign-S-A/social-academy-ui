import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import "moment/locale/es-do";
import "../UI_Forum/style.css";
import Travel from "../../assets/UI_Intership/Travel.svg";
import Contacts from "../../assets/UI_Intership/Contacts.svg";
import Time from "../../assets/UI_Intership/Time.svg";
import Dollar from "../../assets/UI_Intership/Dollar [Fill].svg";
import show from "../../assets/UI_Intership/Show.svg";
import cal from "../../assets/UI_Intership/Calendar.svg";

export const CardsIntership = ({
	id,
	Titulo,
	Jornada,
	Puesto,
	DescripcionBreve,
	Salario,
	Fecha
}) => {
    const noteDate = moment(Fecha);

	return (
		<>
			<div className="bg-gray-50 mx-3 my-4 w-1/3 rounded-xl shadow-lg ring-1 ring-gray-200">
				<div className="m-3">
					{/*Header*/}
					<div className="grid grid-cols-4 gap-4 my-2">
						<div className="flex justify-center items-center col-span-3">
							<p className="font-Poppins text-1.5s font-bold mx-2">{Titulo}</p>
						</div>
					</div>

					<div className="grid grid-cols-8 gap-4 my-4">
						<img src={Contacts} alt="Contacts" className="mx-2" />
						<p className="font-Poppins text-1.5s text-gray-500 col-span-7">
							<strong>Descripcion: </strong>
							{DescripcionBreve}
						</p>

						<img src={Dollar} alt="Dollar" className="mx-3" />
						<p className="font-Poppins text-1.5s text-gray-500 col-span-7">
							<strong>Salario: </strong>
							{Salario}
						</p>

						<img src={Time} alt="Time" className="mx-2" />
						<p className="font-Poppins text-1.5s text-gray-500 col-span-7">
							<strong>Jornada: </strong>
							{Jornada}
						</p>

						<img src={Travel} alt="Travel" className="mx-2" />
						<p className="font-Poppins text-1.5s text-gray-500 col-span-7">
							<strong>Puesto: </strong>
							{Puesto}
						</p>
						<img src={cal} alt="Calendar" className="mx-2" />
						<p className="font-Poppins text-1.5s text-gray-500 col-span-7">
							<strong>Fecha de publicación: </strong>
							<span className="tracking-wide">
							&nbsp;
							{noteDate.startOf('day').fromNow()}
							</span>
						</p>
					</div>
					<div className="flex">
						<Link to={`./Pasantia/${id}`}>
							<button className="flex font-Poppins text-sm bg-second text-white shadow-lg cursor-pointer px-4 py-3 rounded-lg mx-3 justify-center items-center">
								<img src={show} alt="show" className="mx-1" />
								<p>Ver</p>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
