import React from "react";
import Like from "../../assets/UI_Forum/Like.svg";

export const Answers = ({
  NameAnswers,
  IdPerson,
  ProfilePhoto,
  BodyAnswer,
  DateAnswers,
  LikesAnswers,
  LikedAnswer,
}) => {
  return (
    <>
      <div className="bg-gray-50 ring-1 ring-gray-200 mx-10 my-8 rounded-md shadow-sm">
        <div className="flex mx-8 py-3">
          <img src={ProfilePhoto} alt={NameAnswers} className="w-10" />
          <div className="mx-4">
            <p className="font-Poppins text-sm text-gray-600 font-medium">
              {NameAnswers}
            </p>
            <p className="font-Poppins text-xs text-gray-400">{DateAnswers}</p>
          </div>
        </div>
        <p className="font-Poppins text-gray-500 text-sm font-normal mx-8 py-2">
          {BodyAnswer}
        </p>
        <div className="flex mx-8 py-5">
          <img src={Like} alt={Like} className="cursor-pointer" />
          <p className="mx-2 font-Poppins text-gray-500 text-sm font-normal">
            {LikesAnswers}
          </p>
        </div>
      </div>
    </>
  );
};
