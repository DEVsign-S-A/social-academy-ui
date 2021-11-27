import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Tailwind/Button";
import { Grid } from "../Tailwind/Grid";

import search from "../../assets/UI_Forum/Search.svg";
import Plus from "../../assets/UI_Forum/Plus.svg";

export const SearchBarCourses = () => {
	return (
		<div className="mt-32">
		<div className="md:flex md:mx-20 md:flex-col items-center mt-32  mr-14 ml-5">
				<Grid $grid_search_bar>
					<img className="mx-5 cursor-pointer" src={search} alt="search icon" />
					<input
						type="text"
						className="appearance-none texto w-11/12 bg-transparent focus:outline-none"
						placeholder="Buscar.."
					/>
					<Link to="New_Course">
						<Button $border_lighi_con_grid
                        >
							<img src={Plus} alt="plus icons" className='w-28 ml-1 my-3 md:w-9 m-0'/>
							&nbsp;
                            <p className="hidden md:block mt-3">Nuevo </p>
							&nbsp;
							<p className="hidden md:block mt-3">Curso</p>
						</Button>
					</Link>
				</Grid>
			</div>
		</div>
	);
};
