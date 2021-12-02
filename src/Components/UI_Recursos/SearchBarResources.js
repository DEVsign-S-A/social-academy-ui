import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Tailwind/Button";
import { Grid } from "../Tailwind/Grid";

import Plus from "../../assets/UI_Forum/Plus.svg";

export const SearchBarResources = () => {
	return (
		<div className="md:flex md:mx-20 md:flex-col items-center mt-32  mr-14 ml-5">
				<Grid $grid_search_bar>
				<div className="appearance-none w-11/12 bg-transparent focus:outline-none text-center justify-center items-center">
				<p className="text-gray-600 text-2xl  font-semibold">
					Recursos Académicos
				</p>
			</div>
					<Link to="New_Resource">
						<Button $border_lighi_con_grid
						className="justify-center items-center"
						>
                        <img src={Plus} alt="plus icons" className='w-28 ml-1 my-3 md:w-9 m-0'/>
                        &nbsp;
							<p className="hidden md:block mt-3">Subir </p>
							&nbsp;
							<p className="hidden md:block mt-3">recurso</p>
						</Button>
					</Link>
				</Grid>
		</div>
	);
};
