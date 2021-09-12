import React from 'react';
import { BannerEmpresas } from '../Components/UI_Home/BannerEmpresas';
import { BannerEstadisticas } from '../Components/UI_Home/BannerEstadisticas';
import { BannerWelcome } from '../Components/UI_Home/BannerWelcome';
import { CardsAreas } from '../Components/UI_Home/CardsAreas';
import { CardsPremium } from '../Components/UI_Home/CardsPremium';
import { NuestrosAliados } from '../Components/UI_Home/NuestrosAliados';
import { OpinionEstudiantes } from '../Components/UI_Home/OpinionEstudiantes';
import { Footer } from "../Components/UI_Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <BannerWelcome/>
      <CardsAreas/>
      <BannerEstadisticas/>
      <OpinionEstudiantes/>
      <BannerEmpresas/>
      <CardsPremium/>
      <NuestrosAliados/>
      <Footer/>
    </>
  );
};

export default HomeScreen;
