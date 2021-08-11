import React from 'react';
import { Banner } from '../Components/UI_About/Banner';
import { AboutUs } from '../Components/UI_About/AboutUs';
import { Reason } from '../Components/UI_About/Reason';
import { Cita, AboutCards } from '../Components/UI_About/AboutCards';
import { Mision } from '../Components/UI_About/Mision';

const AboutScreen = () => {
  return (
    <>
      <Banner/>
      <AboutUs/>
      <Reason/>
      <Cita/>
      <Mision/>
      <AboutCards/>
    </>
  );
};

export default AboutScreen;
