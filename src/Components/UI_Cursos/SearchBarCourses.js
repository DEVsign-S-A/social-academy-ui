import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Tailwind/Button';
import { Grid } from '../Tailwind/Grid';

import search from "../../assets/UI_Forum/Search.svg";
import Plus from "../../assets/UI_Forum/Plus.svg";
import Filter from "../../assets/UI_Forum/Filter.svg";

export const SearchBarCourses = () => {
    return (
        <div className = "mt-32" >
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

                <Link to="New_Course">
                    <Button $border_lighi_con_grid>
                        <img src={ Plus } alt="plus icons" className="mr-4" />
                        <p className="mt-3">Nuevo </p>
                        &nbsp;
                        <p className="mt-3">Curso</p>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
