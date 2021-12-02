import React from 'react';
import { Footer } from '../Components/UI_Footer/Footer';
import { CardsRecursos } from '../Components/UI_Recursos/CardsRecursos';
import { SearchBarResources } from '../Components/UI_Recursos/SearchBarResources';

const ResourcesScreen = () => {
  return (
    <>
      <SearchBarResources/>

      <CardsRecursos/>

      <Footer/>
    </>
  );
};

export default ResourcesScreen;
