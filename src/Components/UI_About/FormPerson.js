import React from "react";
import { useForm } from "../../Hook/useForm";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const FormPerson = () => {

	const [formValues, handleInputChange, reset] = useForm({
		NamePerson: "",
		LastNamePerson: "",
		email: "",
		phone: "",
		BodyMsg: "",
	});

	const { NamePerson, LastNamePerson, email, phone, BodyMsg } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_5ud6m2y",
				"template_i99wu9i",
				e.target,
				"user_dksxROmQ2ygGn1u5eC9m8"
			)
			.then((result) => {
        Swal.fire(result.text, "Correo Enviado exitosamente", "success")
			})
			.catch((error) => {
				console.log(error.text);
			});

		// console.log(e.target);
		setTimeout(() => {
			reset();
		}, 200);
	};

	return (
		<div className="bg-WhiteSocial shadow-2xl rounded-3xl lg:mx-8 lg:my-5 lg:w-2/3 w-11/12 text-sm">
			<div className="grid grid-cols-3 gap-4 mx-8 my-6">
				<div className="grid grid-cols-1 gap-4">
					<label className="text-gray-600 font-Montserrat font-medium">
						Nombre:
					</label>
					<label className="text-gray-600 font-Montserrat font-medium">
						Apellido:
					</label>
					<label className="text-gray-600 font-Montserrat font-medium">
						Correo Electronico:
					</label>
					<label className="text-gray-600 font-Montserrat font-medium">
						Telefono:
					</label>
					<label className="text-gray-600 font-Montserrat font-medium">
						Mensaje:
					</label>
				</div>

				<form
					className="grid grid-cols-1 gap-4 col-span-2"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
						placeholder="Mateo"
						required={true}
						name="NamePerson"
						value={NamePerson}
						onChange={handleInputChange}
					/>
					<input
						type="text"
						className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
						placeholder="García"
						required={true}
						name="LastNamePerson"
						value={LastNamePerson}
						onChange={handleInputChange}
					/>
					<input
						type="email"
						className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
						placeholder="mateo@example.com"
						required={true}
						name="email"
						value={email}
						onChange={handleInputChange}
					/>
					<input
						type="text"
						className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
						placeholder="+505 - #### ####"
						name="phone"
						value={phone}
						onChange={handleInputChange}
					/>
					<textarea
						className="bg-gray-200 w-full resize-none h-28 px-5 py-2 outline-none font-Poppins font-medium text-gray-700"
						required={true}
						placeholder="Hablanos acerca de algún proyecto, necesidad, molestia o mejora en relación a la plataforma"
						name="BodyMsg"
						value={BodyMsg}
						onChange={handleInputChange}
					></textarea>
					<input
						value="Enviar"
						type="submit"
						className="outline-none py-2 px-5 bg-BlueSocial text-white rounded-xl cursor-pointer font-Poppins font-medium"
					/>
				</form>

				<div></div>
			</div>
		</div>
	);
};
