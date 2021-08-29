import React from "react";

export const FormPerson = () => {
  return (
    <div className="bg-WhiteSocial shadow-2xl rounded-3xl mx-8 my-5 w-2/3">
      <form className="grid grid-cols-3 gap-4 mx-8 my-6">
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

        <div className="grid grid-cols-1 gap-4 col-span-2">
          <input
            type="text"
<<<<<<< HEAD
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
=======
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700 rounded-lg"
>>>>>>> c00e6d42e7e498d6ea46b7288eea3209c015d23a
            placeholder="Mateo"
            required={true}
          />
          <input
            type="text"
<<<<<<< HEAD
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
=======
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700 rounded-lg" 
>>>>>>> c00e6d42e7e498d6ea46b7288eea3209c015d23a
            placeholder="García"
            required={true}
          />
          <input
            type="email"
<<<<<<< HEAD
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
=======
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700 rounded-lg"
>>>>>>> c00e6d42e7e498d6ea46b7288eea3209c015d23a
            placeholder="mateo@example.com"
            required={true}
          />
          <input
            type="text"
<<<<<<< HEAD
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700"
            placeholder="+505 - #### ####"
          />
          <textarea
            className="bg-gray-200 w-full resize-none h-28 px-5 py-2 outline-none font-Poppins font-medium text-gray-700"
            required={true}
            placeholder="Hablanos acerca de algún proyecto, necesidad, molestia o mejora en relación a la plataforma"
=======
            className="bg-gray-200 w-full h-10 px-5 outline-none font-Poppins font-medium text-gray-700 rounded-lg"
            placeholder="+505 - #### ####"
          />
          <textarea
            className="bg-gray-200 w-full resize-none h-28 px-5 py-2 outline-none font-Poppins font-medium text-gray-700 rounded-lg"
            required={true}
            placeholder="Hablanos acerca de algún proyecto, necesidad, molestia o mejora en relación a la plataforma"

>>>>>>> c00e6d42e7e498d6ea46b7288eea3209c015d23a
          ></textarea>
        </div>

        <div>
          <input
            value="Enviar"
            type="submit"
<<<<<<< HEAD
            className="outline-none py-2 px-5 bg-BlueSocial text-white rounded-xl cursor-pointer font-Poppins font-medium"
=======
            className="py-2 px-5 bg-BlueSocial text-white rounded-xl cursor-pointer font-Poppins font-medium"
>>>>>>> c00e6d42e7e498d6ea46b7288eea3209c015d23a
          />
        </div>
      </form>
    </div>
  );
};
