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
import { Footer } from "../Components/UI_Footer/Footer";

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
      <Cita cita={cita} autor={autor} image={`https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/jaques_fddwsc.jpg`} />
      <WeDo />
      <Cita cita={cita2} autor={autor2} image={`https://res.cloudinary.com/socialacademy/image/upload/v1630442077/Social%20Academy%20Image/6115_o8v8y1.jpg`} />
      <Team />
      <FormContact/>
      <Footer/>
    </>
  );
};

export default AboutScreen;
