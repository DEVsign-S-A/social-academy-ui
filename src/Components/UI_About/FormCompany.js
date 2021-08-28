import React from 'react'

export const FormCompany = () => {
    return (
            <div className="bg-WhiteSocial shadow-2xl rounded-3xl mx-8 my-5 w-2/3">
              <form className="grid grid-rows-7 grid-cols-3 gap-4 mx-8 my-6 items-center justify-center">
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Nombre de la empresa o negocio:
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
                    placeholder="Viajes Express S.A"
                    required={true}
                  />
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Sector Comercial:
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
                    placeholder="Servicios de Transporte"
                    required={true}
                  />
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Tipo:
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
                    placeholder="de Financiación privada"
                    required={true}
                  />
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Sitio web:
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
                    placeholder="www.viajes-express.com"
                  />
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Correo Electronico:
                  </label>
                  <input
                    type="email"
                    className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
                    placeholder="ViajesExpress@example.com"
                    required={true}
                  />
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Telefono:
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 w-full h-10 col-span-2 px-5 outline-none font-Poppins font-medium text-gray-700"
                    placeholder="+505 - #### ####"
                    required={true}
                  />
                  <label className="text-gray-600 font-Montserrat font-medium">
                    Mensaje:
                  </label>
        
                  <textarea
                    className="bg-gray-200 w-full col-span-2 resize-none h-28 px-5 py-2 outline-none font-Poppins font-medium text-gray-700"
                    required={true}
                    placeholder="Cominicate con nosotros, acerca de un posible espacio para publicitarte"
                  ></textarea>
        
                <div>
                  <input
                    value="Enviar"
                    type="submit"
                    className="outline-none py-2 px-5 bg-BlueSocial text-white rounded-xl cursor-pointer font-Poppins font-medium"
                  />
                </div>
              </form>
            </div>
    )
}
