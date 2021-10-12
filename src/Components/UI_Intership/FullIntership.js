import React from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { getIntershipById } from "../../Services/getIntershipById";
import { Grid } from "../Tailwind/Grid";
import { Div, P, Li } from "../Tailwind/IntershipComponets";
/* 
    Images
 */
import back from "../../assets/UI_Forum/Arrow-Left.svg";
import send from "../../assets/UI_Intership/Send.svg";
import Mail from "../../assets/UI_Intership/Mail.svg";
import Smartphone from "../../assets/UI_Intership/Smartphone.svg";
import pin from "../../assets/UI_Intership/Pin.svg";
import buil from "../../assets/UI_Intership/buil.svg";
import { Footer } from "../UI_Footer/Footer";
import Swal from "sweetalert2";

export const FullIntership = () => {
  const { IdIntership } = useParams();

  const intership = getIntershipById(IdIntership);

  if (!intership) {
    <Redirect to="/PageNoFound" />;
  }
  const history = useHistory();

  const handleBack = () => {
    history.push("/Pasantias");
  };

  const handleInterShip = () =>{
    Swal.fire("Pasantía", 'Has Aplicado con éxito', "success");
    setTimeout(() => {
      history.push("/Pasantias");
    }, 600);
  }

  const {
    Title,
    Company,
    Job,
    Careers,
    Workday,
    SalaryRange,
    Body,
    What_we_want_you_todo,
    TechnicalRequirements,
    Education_Experience,
  } = intership;

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <Grid $grid_primary_container>
          <div className="grid grid-cols-4 gap-3 my-2">
            <div className="mx-3 my-2 flex items-center flex-col border-r-2 border-gray-300">
              <img
                src={Company.ProfilePhoto}
                alt={Company.CompanyName}
                className="rounded-full w-36 ring-1 ring-gray-300"
              />

              <Div $littelContainer>
                <img src={buil} alt="buil" className="mx-2" />
                <P $textIntership>
                  <strong>Nombre del negocio: </strong>
                  {Company.CompanyName}
                </P>
              </Div>
              <Div $littelContainer>
                <img src={pin} alt="buil" className="mx-2" />
                <P $textIntership>
                  <strong>Dirección: </strong>
                  {Company.Direction}
                </P>
              </Div>
              <Div $littelContainer>
                <img src={Smartphone} alt="Smartphone" className="mx-2" />
                <P $textIntership>
                  <strong>telf: </strong>
                  +505-25050-23
                </P>
              </Div>
              <Div $littelContainer>
                <img src={Mail} alt="Mail" className="mx-2" />
                <P $textIntership>
                  <strong>Correo: </strong>
                  Email@mail.com
                </P>
              </Div>
            </div>
            <div className="col-span-3">
              <div>
                <div className="flex justify-between">
                  <P $titleIntership>{Title}</P>
                  <button
                    className="flex outline-none px-3 py-2 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer float-right"
                    onClick={handleBack}
                  >
                    <img src={back} alt="back" className="mt-2 mx-2" />
                    Regresar
                  </button>
                </div>

                <div>
                  <br />

                  <P $bodyIntership>
                    <strong>Descrpción: </strong>
                    {Body}
                  </P>
                  <br />
                  <P $bodyIntership>
                    <strong>Detalles Generales: </strong>
                    {What_we_want_you_todo}
                  </P>
                  <br />

                  <P $bodyIntership>
                    <strong>Habilidades Requeridas: </strong>
                  </P>
                  {TechnicalRequirements.map((req) => (
                    <Li $textIntership>{req}</Li>
                  ))}
                  <br />
                  <P $bodyIntership>
                    <strong>Educacion y Experecia: </strong>
                  </P>
                  {Education_Experience.map((edu) => (
                    <Li $textIntership>{edu}</Li>
                  ))}
                </div>
                <div>
                  <br />
                  <P $bodyIntership>
                    <strong>Puesto de Trabajo: </strong>
                    {Job}
                  </P>
                  <br />
                  <P $bodyIntership>
                    <strong>Carreras Asociadas: </strong>
                  </P>
                  {Careers.map((career) => (
                    <Li $textIntership>{career}</Li>
                  ))}
                  <br />
                  <P $bodyIntership>
                    <strong>Jornada Laboral: </strong>
                    {Workday}
                  </P>
                  <br />
                  <P $bodyIntership>
                    <strong>Salario: </strong>
                    {SalaryRange}
                  </P>
                </div>
              </div>
            </div>
            <button 
            onClick={handleInterShip}
            className="flex font-Poppins text-sm bg-BlueSocial text-white font-medium shadow-lg cursor-pointer px-3 py-3 rounded-lg mx-3 justify-center items-center">
              <img src={send} alt="send" className="mx-1" />
              <p>Aplicar</p>
            </button>
          </div>
        </Grid>
      </div>

      <Footer/>
    </>
  );
};
