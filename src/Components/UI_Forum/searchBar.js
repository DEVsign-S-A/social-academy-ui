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
      <div className="md:flex md:mx-20 md:flex-col mr-14 ml-5">
        <Grid $grid_search_bar>
          <img className="mx-5 cursor-pointer" src={search} alt="search icon" />
          <input
            type="text"
            className="appearance-none texto w-11/12 bg-transparent focus:outline-none"
            placeholder="Buscar.."
          />
          <Link to="New_Question">
            <Button $border_lighi_con_grid>
            <img src={Plus} alt="plus icons" className='w-28 ml-1 my-3 md:w-9 m-0'/>
            &nbsp;
                <p className="hidden md:block mt-3">Nueva </p>
                &nbsp;
                <p className="hidden md:block mt-3">Pregunta</p>
            </Button>
          </Link>
        </Grid>

      </div>
    </>
  );
};
