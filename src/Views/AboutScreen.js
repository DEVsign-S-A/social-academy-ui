import React from 'react';
import { Banner } from '../Components/UI_About/Banner';
import { AboutUs } from '../Components/UI_About/AboutUs';
import { Reason } from '../Components/UI_About/Reason';

const AboutScreen = () => {
  return (
    <>
      <Banner/>
      <AboutUs/>
      <Reason/>
    </>
  );
};

export default AboutScreen;
