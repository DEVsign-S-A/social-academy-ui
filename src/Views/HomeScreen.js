import React from 'react';
import { BannerEmpresas } from '../Components/UI/UI_Home/BannerEmpresas';
import { BannerEstadisticas } from '../Components/UI/UI_Home/BannerEstadisticas';
import { BannerWelcome } from '../Components/UI/UI_Home/BannerWelcome';
import { CardsAreas } from '../Components/UI/UI_Home/CardsAreas';
import { CardsPremium } from '../Components/UI/UI_Home/CardsPremium';
import { NuestrosAliados } from '../Components/UI/UI_Home/NuestrosAliados';
import { OpinionEstudiantes } from '../Components/UI/UI_Home/OpinionEstudiantes';

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
    </>
  );
};

export default HomeScreen;
