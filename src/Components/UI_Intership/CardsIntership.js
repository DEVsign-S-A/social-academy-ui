import React from "react";
import "../UI_Forum/style.css";
import Travel from "../../assets/UI_Intership/Travel.svg";
import Contacts from "../../assets/UI_Intership/Contacts.svg";
import Time from "../../assets/UI_Intership/Time.svg";
import Dollar from "../../assets/UI_Intership/Dollar [Fill].svg";

export const CardsIntership = ({
  Title,
  Body,
  Company,
  SalaryRange,
  Workday,
  Job,
}) => {
  return (
    <>
      <div className="bg-gray-50 mx-3 my-4 w-80 rounded-xl shadow-2xl ring-1 ring-gray-200">
        <div className="m-3">
          {/*Header*/}
          <div className="grid grid-cols-4 gap-4 my-2">
            <div className="rounded-full w-16 col-span-1">
              <img
                src={Company.ProfilePhoto}
                alt={Company.CompanyName}
                className="rounded-full ring-1 ring-gray-400"
              />
            </div>
            <div className="flex justify-center items-center col-span-3">
              <p className="font-Poppins text-xs font-bold mx-2">{Title}</p>
            </div>
          </div>
    
          <div className="">
            <img src={Contacts} alt="Contacts" />
            <p className="font-Poppins text-xs text-gray-500">
              <strong>Descripcion: </strong>
              {Body}
            </p>
          </div>
          <div className="flex my-2">
            <img src={Dollar} alt="Dollar" className='mx-2'/>
            <p className="font-Poppins text-xs text-gray-500">
              <strong>Salario: </strong>
              {SalaryRange}
            </p>
          </div>
          <div className="flex my-2">
            <img src={Time} alt="Time" className='mx-2'/>
            <p className="font-Poppins text-xs text-gray-500">
              <strong>Jornada: </strong>
              {Workday}
            </p>
          </div>
          <div className="flex my-2">
            <img src={Travel} alt="Travel" className='mx-2'/>
            <p className="font-Poppins text-xs text-gray-500">
              <strong>Puesto: </strong>
              {Job}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
