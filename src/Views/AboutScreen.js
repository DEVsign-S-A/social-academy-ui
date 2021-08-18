import React from "react";
import { Banner } from "../Components/UI_About/Banner";
import { AboutUs } from "../Components/UI_About/AboutUs";
import { Reason } from "../Components/UI_About/Reason";
import { Cita, AboutCards } from "../Components/UI_About/AboutCards";
import { Mision } from "../Components/UI_About/Mision";
import { Vision } from "../Components/UI_About/Vision";
import { WeDo } from "../Components/UI_About/WeDo";
import { citas } from "../data/data";
import { Team } from "../Components/UI_About/Team";
import { FormContact } from "../Components/UI_About/FormContact";

import jaques from "../assets/UI-About/jaques.jpg";
import benjamin from "../assets/UI-About/6115.jpg";
const AboutScreen = () => {

  const { cita, autor } = citas[0];

  const { cita: cita2, autor: autor2 } = citas[1];

  return (
    <>
      <Banner />
      <AboutUs />
      <Reason />
      <Mision />
      <AboutCards />
      <Vision />
      <Cita cita={cita} autor={autor} image={jaques} />
      <WeDo />
      <Cita cita={cita2} autor={autor2} image={benjamin} />
      <Team />
      <FormContact/>
    </>
  );
};

export default AboutScreen;
