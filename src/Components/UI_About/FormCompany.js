import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../Hook/useForm";
import { startNewRequestContactCompany } from "../../Redux/Actions/contactActions";

export const FormCompany = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    NameCompany: "",
    SectorComercial: "",
    Tipo: "",
    SitioWeb: "",
    email: "",
    phone: "",
    BodyMsg: "",
  });

  const {
    NameCompany,
    SectorComercial,
    Tipo,
    SitioWeb,
    email,
    phone,
    BodyMsg,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      startNewRequestContactCompany(
        NameCompany,
        SectorComercial,
        Tipo,
        SitioWeb,
        email,
        phone,
        BodyMsg
      )
    );

    setTimeout(() => {
      reset();
    }, 200);
  };

  return (
    <div className="bg-WhiteSocial shadow-2xl rounded-3xl lg:mx-8 lg:my-5 lg:w-2/3 w-11/12 text-sm">
      <form
        className="grid grid-rows-7 grid-cols-3 gap-4 mx-8 my-6 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label className="text-gray-600 font-Montserrat font-medium">
          Nombre de la empresa o negocio:
        </label>
        <input
          type="text"
          className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
          placeholder="Viajes Express S.A"
          required={true}
          name="NameCompany"
          value={NameCompany}
          onChange={handleInputChange}
        />
        <label className="text-gray-600 font-Montserrat font-medium">
          Sector Comercial:
        </label>
        <input
          type="text"
          className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
          placeholder="Servicios de Transporte"
          required={true}
          name="SectorComercial"
          value={SectorComercial}
          onChange={handleInputChange}
        />
        <label className="text-gray-600 font-Montserrat font-medium">
          Tipo:
        </label>
        <input
          type="text"
          className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
          placeholder="de Financiación privada"
          required={true}
          value={Tipo}
          name="Tipo"
          onChange={handleInputChange}
        />
        <label className="text-gray-600 font-Montserrat font-medium">
          Sitio web:
        </label>
        <input
          type="text"
          className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
          placeholder="www.viajes-express.com"
          name="SitioWeb"
          onChange={handleInputChange}
          value={SitioWeb}
        />
        <label className="text-gray-600 font-Montserrat font-medium">
          Correo Electronico:
        </label>
        <input
          type="email"
          className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
          placeholder="ViajesExpress@example.com"
          required={true}
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <label className="text-gray-600 font-Montserrat font-medium">
          Telefono:
        </label>
        <input
          type="text"
          className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
          placeholder="+505 - #### ####"
          required={true}
          name="phone"
          value={phone}
          onChange={handleInputChange}
        />
        <label className="text-gray-600 font-Montserrat font-medium">
          Mensaje:
        </label>

        <textarea
          className="bg-gray-200 w-full col-span-2 resize-none h-28 px-5 py-2 outline-none font-Poppins font-medium text-gray-700"
          required={true}
          name="BodyMsg"
          value={BodyMsg}
          placeholder="Cominicate con nosotros, acerca de un posible espacio para publicitarte"
          onChange={handleInputChange}
        ></textarea>

        <div>
          <input
            value="Enviar"
            type="submit"
            onClick={handleSubmit}
            className="outline-none py-2 px-5 bg-BlueSocial text-white rounded-xl cursor-pointer font-Poppins font-medium"
          />
        </div>
      </form>
    </div>
  );
};
