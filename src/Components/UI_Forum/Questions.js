import React from "react";
import { Grid } from "../Tailwind/Grid";
import label from "../../assets/UI_Forum/Pantone.svg";
import Like from "../../assets/UI_Forum/Like.svg";
import Chat from "../../assets/UI_Forum/Chat.svg";
import {Answers} from './Answers';
import { PostAnsewrs } from "./postAnsewrs";
export const Questions = ({
  user,
  Title,
  Category,
  Body,
  Date,
  Likes,
  imageQuestion,
  LikedQuestion,
  QuantityAnswers,
}) => {
  return (
    <>
      <div className="w-11/12 ml-12">
        <Grid $grid_primary_container>
          <div className="flex m-5 p-5 justify-between">
            <div className="flex ">
              <img src={user.ProfilePhoto} alt={user.Name} />
              <div className="mx-4">
                <p className="font-Poppins text-gray-600 font-medium">{user.Name}</p>
                <p className="font-Poppins text-gray-400 text-sm">{Date}</p>
              </div>
            </div>
            <div className="flex">
              <p className="font-Poppins text-gray-400 text-sm mt-3 mx-3">
                {Category}
              </p>
              <img src={label} alt="label" />
            </div>
          </div>

          <p className="mx-8 font-Poppins text-gray-600 font-medium">
            Titulo: &nbsp;
            <span className="font-Poppins text-gray-500 text-sm font-normal">
              {Title}
            </span>
          </p>
          <div>
            {imageQuestion && (
              <img src={imageQuestion} alt={user.IdPerson} className="w-1/2 m-8" />
            )}
          </div>
          <br />
          <p className="mx-8 font-Poppins text-gray-600 font-medium">
            Contenido: &nbsp;
            <span className="font-Poppins text-gray-500 text-sm font-normal">
              {Body}
            </span>
          </p>
          <div className="flex m-8">
            <div className="flex mx-5">
              <img src={Like} alt={Like} className="cursor-pointer" />
              <p className="mx-2 font-Poppins text-gray-500 text-sm font-normal">
                {Likes}
              </p>
            </div>
            <div className="flex mx-5">
              <img src={Chat} alt={Chat} className="cursor-pointer" />
              <p className="mx-2 font-Poppins text-gray-500 text-sm font-normal">
                {QuantityAnswers.length}
              </p>

              <p className="mx-8 font-Poppins text-BlueSocial text-sm font-medium cursor-pointer">
                Ver Respuestas
              </p>
            </div>
          </div>
          <PostAnsewrs/>
          {
            QuantityAnswers.map(
              (answers) => (
                <Answers
                  key={answers.IdAnswer}
                  {...answers}
                />
              )
            )
          }
        </Grid>
      </div>
    </>
  );
};
