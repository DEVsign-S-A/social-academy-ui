import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Tailwind/Button";
import { Grid } from "../Tailwind/Grid";
import Plus from "../../assets/UI_Forum/Plus.svg";

export const SearchBarCourses = () => {
	return (
		<div className="mt-32">
			<div className="md:flex md:mx-20 md:flex-col items-center mt-32  mr-14 ml-5">
				<Grid $grid_search_bar>
					<div className="appearance-none w-11/12 bg-transparent focus:outline-none text-center justify-center items-center">
						<p className="text-gray-600 text-2xl  font-semibold">
							Curso Académicos
						</p>
					</div>
					<Link to="New_Course">
						<Button
							$border_lighi_con_grid
							className="flex justify-center items-center"
						>
							<img
								src={Plus}
								alt="plus icons"
								className="w-28 ml-1 my-3 md:w-9 m-0"
							/>
							&nbsp;
							&nbsp;
							<p className="hidden md:block ">Nuevo </p>
							&nbsp;
							<p className="hidden md:block">Curso</p>
						</Button>
					</Link>
				</Grid>
			</div>
		</div>
	);
};
