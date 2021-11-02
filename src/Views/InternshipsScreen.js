import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsIntership } from "../Components/UI_Intership/CardsIntership";
import { SearchBar } from "../Components/UI_Intership/searchBar";
import { Sidebar } from "../Components/UI_Intership/Sidebar";
import { startLoadingInterships } from "../Redux/Actions/intershipsActions";

const InternshipsScreen = () => {
	// const { showSidebar } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingInterships());
	}, [dispatch]);

	const { interships } = useSelector((state) => state.intership);


	return (
		<>
			<Sidebar />

			<SearchBar />
			<div className="ml-20 flex flex-row flex-wrap">
				{interships &&
					interships.map((intership) => (
						<CardsIntership key={intership.id} {...intership} />
					))}
			</div>
		</>
	);
};

export default InternshipsScreen;
