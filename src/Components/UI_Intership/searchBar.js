import React from "react";
import { Grid } from "../Tailwind/Grid";
import search from "../../assets/UI_Forum/Search.svg";
import Filter from "../../assets/UI_Forum/Filter.svg";

export const SearchBar = () => {
	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<div className="flex justify-center items-center ml-0 sm:ml-24 top-20 mx-20 w-11/12 sm:w-10/12">
				<Grid $grid_search_bar>
					<div
						className="appearance-none w-11/12 bg-transparent focus:outline-none text-center justify-center items-center"
					>
						<p className="text-gray-600 text-2xl  font-semibold">Pansatias</p>
					</div>
				</Grid>
			</div>
		</>
	);
};
