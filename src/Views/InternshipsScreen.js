import React from "react";
import { CardsIntership } from "../Components/UI_Intership/CardsIntership";
import { SearchBar } from "../Components/UI_Intership/searchBar";
import { Sidebar } from "../Components/UI_Intership/Sidebar";
import { dataIntership } from "../data/dataInternship";

const InternshipsScreen = () => {
  return (
    <>
      <Sidebar />

      <SearchBar />
      <div className="w-11/12 ml-20 flex flex-row flex-wrap">
        {dataIntership.map((intership) => (
          <CardsIntership key={intership.IdIntership} {...intership} />
        ))}
      </div>
    </>
  );
};

export default InternshipsScreen;
