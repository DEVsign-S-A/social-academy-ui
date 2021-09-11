import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "../Tailwind/Grid";
//image
import center from "../../assets/UI_Forum/Align- Center.svg";
import Justify from "../../assets/UI_Forum/Align-Justify.svg";
import Right from "../../assets/UI_Forum/Align-Right.svg";
import Left from "../../assets/UI_Forum/Align-Left.svg";
import Arrow from "../../assets/UI_Forum/Arrow-Down 2.svg";
import Bold from "../../assets/UI_Forum/Bold.svg";
import Font from "../../assets/UI_Forum/Font.svg";
import Image from "../../assets/UI_Forum/Image.svg";
import Italic from "../../assets/UI_Forum/Italic.svg";
import List from "../../assets/UI_Forum/List.svg";
import link from "../../assets/UI_Forum/Link.svg";
import Numbered from "../../assets/UI_Forum/Numbered List.svg";
import Smile from "../../assets/UI_Forum/Smile.svg";
import Underline from "../../assets/UI_Forum/Underline.svg";
import { Footer } from "../UI_Footer/Footer";

export const NewQuestion = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/Foros");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex justify-between">
        <h1 className="text-gray-700 font-Montserrat font-semibold text-2xl ml-3">
          Formula un Pregunta
        </h1>

        <button
          className="p-3 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer"
          onClick={handleBack}
        >
          Regresar
        </button>
      </div>

      <Grid $grid_primary_container>
        <form
        // onSubmit={}
        >
          <div className="my-2 py-2">
            <p className="text-gray-600 font-Poppins font-medium text-lg p-5">
              Título
            </p>
            <p className="text-gray-400 font-Poppins ml-6 pb-2">
              Se específico e imagina que estás haciendo la pregunta a otra
              persona
            </p>
            <input
              required={true}
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
            />
          </div>
          <div className="my-2 py-2">
            <p className="text-gray-600 font-Poppins font-medium text-lg p-5">
              Etiquetas
            </p>
            <p className="text-gray-400 font-Poppins ml-6 pb-2">
              Añade la categoria a la cual corresponde tu pregunta
            </p>
            <input
              required={true}
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              placeholder="Programación, Diseño, Finanzas, etc."
            />
          </div>
          <div className="my-2 py-2">
            <p className="text-gray-600 font-Poppins font-medium text-lg p-5">
              Cuerpo
            </p>
            <div className="flex justify-between">
              <p className="text-gray-400 font-Poppins ml-6 pb-2">
                Incluye toda la información que alguien necesita para responder
                tu pregunta
              </p>
              {/* <input type="submit" value="Agrega una Imagen"
                className="p-3 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer"
             /> */}
            </div>

            <div className="mx-8 w-11/12 ring-1 ring-gray-200 rounded-t-xl flex bg-gray-100 border-b-2 border-gray-200 py-4 items-baseline">
              <button className="flex ml-6">
                <img src={Font} alt="Font" className="mr-1" />
                <img src={Arrow} alt="Arrow" className="mt-1" />
              </button>
              <button className="ml-6">
                <img src={Bold} alt="Bold" />
              </button>
              <button className="ml-6">
                <img src={Italic} alt="Italic" />
              </button>
              <button className="ml-6">
                <img src={Underline} alt="Underline" className="mt-1" />
              </button>
              <button className="ml-6">
                <img src={link} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={Smile} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={Image} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={List} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={Numbered} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={center} alt="Underline" />
              </button>{" "}
              <button className="ml-6">
                <img src={Justify} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={Left} alt="Underline" />
              </button>
              <button className="ml-6">
                <img src={Right} alt="Underline" />
              </button>
            </div>

            <textarea
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-200 rounded-b-xl rounded-t-none py-2 outline-none px-5 font-Poppins text-gray-700 h-60 resize-none"
              required={true}
            ></textarea>
          </div>
          <input
            type="submit"
            className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white"
            value="Guardar"
          />
        </form>
      </Grid>
      <Footer />
    </>
  );
};
