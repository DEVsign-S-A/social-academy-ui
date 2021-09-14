import React from 'react';
import { CardsIntership } from '../Components/UI_Intership/CardsIntership';
import { SearchBar } from '../Components/UI_Intership/searchBar';
import { Sidebar } from '../Components/UI_Intership/Sidebar';
import {dataIntership} from '../data/dataInternship';

const InternshipsScreen = () => {
  return (
    <>
    
    <Sidebar/>
    
    <SearchBar/>
    {
      dataIntership.map( 
        (intership) => (
           <div className="w-full flex ">
            <CardsIntership
              key = {intership.IdIntership}
              {...intership}
            />
          </div>
        )
      )
    }

    
    </>
  );
};

export default InternshipsScreen;
