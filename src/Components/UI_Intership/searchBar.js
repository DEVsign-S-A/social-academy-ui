import React from "react";
import {Grid} from '../Tailwind/Grid'
import search from "../../assets/UI_Forum/Search.svg";
import Filter from "../../assets/UI_Forum/Filter.svg";



export const SearchBar = () => {
  
  
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="flex justify-between items-center top-20 left-9 mx-20">
        <Grid $grid_search_bar>
          <img className="mx-5 cursor-pointer" src={search} alt="search icon" />
          <input
            type="text"
            className="appearance-none texto w-11/12 bg-transparent focus:outline-none"
            placeholder="Buscar.."
          />
          <img className="mr-4 cursor-pointer" src={Filter} alt="search icon" />
        </Grid>

      </div>
    </>
  );
};