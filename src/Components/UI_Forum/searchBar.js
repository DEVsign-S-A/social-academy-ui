import React from "react";
import {Grid} from '../Tailwind/Grid'
import search from "../../assets/UI_Forum/Search.svg";
import Plus from "../../assets/UI_Forum/Plus.svg";
import Filter from "../../assets/UI_Forum/Filter.svg";
import { Link } from "react-router-dom";
import { Button } from "../Tailwind/Button";



export const SearchBar = () => {
  
  
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="md:flex md:mx-20 md:flex-row mr-14 ml-5 justify-center items-center">
        <Grid $grid_search_bar>
          <img className="mx-5 cursor-pointer" src={search} alt="search icon" />
          <input
            type="text"
            className="appearance-none texto w-11/12 bg-transparent focus:outline-none"
            placeholder="Buscar.."
          />
          <img className="mr-4 cursor-pointer" src={Filter} alt="search icon" />
        </Grid>

        <Link to="New_Question">
          <Button $border_lighi_con_grid>
              <img src={ Plus } alt="plus icons" className="mr-2" />
              <p className="">Nueva </p>
              &nbsp;
              <p className="">Pregunta</p>
          </Button>
        </Link>
      </div>
    </>
  );
};
