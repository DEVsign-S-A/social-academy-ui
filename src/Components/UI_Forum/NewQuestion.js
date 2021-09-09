import React from "react";
import { Grid } from "../Tailwind/Grid";
import { Button } from "../Tailwind/Button";
import Plus from "../../assets/UI_Forum/Plus.svg";

export const NewQuestion = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-gray-700 font-Montserrat font-bold text-3xl ml-3">
        Formula un Pregunta
      </h1>

      <Grid $grid_primary_container>
        <form
        // onSubmit={}
        >
          <div className="m-2 py-2">
            <p className="text-gray-600 font-Poppins font-bold text-2xl ml-5 p-5">
              Título
            </p>
            <p className="text-gray-400 font-Poppins ml-5 pb-2">
              Se específico e imagina que estás haciendo la pregunta a otra
              persona
            </p>
            <input
              required={true}
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
            />
          </div>
          <div className="m-2 py-2">
            <p className="text-gray-600 font-Poppins font-bold text-2xl ml-5 p-5">
              Cuerpo
            </p>
            <div className='flex justify-between'>

            <p className="text-gray-400 font-Poppins ml-5 pb-2">
              Incluye toda la información que alguien necesita para responder tu
              pregunta
            </p>
            <input type="submit" value="Agrega una Imagen"
                className="p-3 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer"
             />
            </div>

            <textarea
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-5 font-Poppins text-gray-700 h-60 resize-none"
              required={true}
            ></textarea>
          </div>
          <div className="m-2 py-2">
            <p className="text-gray-600 font-Poppins font-bold text-2xl ml-5 p-5">
              Etiquetas
            </p>
            <p className="text-gray-400 font-Poppins ml-5 pb-2">
              Añade la categoria a la cual corresponde tu pregunta
            </p>
            <input
              required={true}
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              placeholder="Programación, Diseño, Finanzas, etc."
            />
          </div>
        </form>
      </Grid>

      <Button $border_lighi_con_grid>
        <img src={Plus} alt="plus icons" className="mr-2" />
        <p className="">Enviar</p>
        &nbsp;
      </Button>
    </>
  );
};
