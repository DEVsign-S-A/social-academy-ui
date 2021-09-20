import React from 'react';
import { Footer } from '../Components/UI_Footer/Footer';
import { Sidebar } from '../Components/UI_Forum/Sidebar';
import { CardsRecursos } from '../Components/UI_Recursos/CardsRecursos';

const ResourcesScreen = () => {
  return (
    <>
      <Sidebar/>

      <CardsRecursos/>

      <Footer/>
    </>
  );
};

export default ResourcesScreen;
