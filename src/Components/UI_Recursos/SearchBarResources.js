import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Tailwind/Button';
import { Grid } from '../Tailwind/Grid';

import search from "../../assets/UI_Forum/Search.svg";
import Plus from "../../assets/UI_Forum/Plus.svg";
import Filter from "../../assets/UI_Forum/Filter.svg";

export const SearchBarResources = () => {
    return (
            <div className="flex flex-row flex-wrap  items-center mt-32 ml-0 sm:ml-24 w-full sm:w-10/12">
                <div className = "w-8/12 mr-6">
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
                

                <Link to="New_Resource">
                    <Button $border_lighi_con_grid>
                        <img src={ Plus } alt="plus icons" className="mr-4" />
                        <p className="mt-3">Subir </p>
                        &nbsp;
                        <p className="mt-3">recurso</p>
                    </Button>
                </Link>
            </div>
    )
}
