import React, { useEffect } from "react";
import { Sidebar } from "../Components/UI_Forum/Sidebar";
import { SearchBar } from "../Components/UI_Forum/searchBar";
import { Footer } from "../Components/UI_Footer/Footer";
import { Questions } from "../Components/UI_Forum/Questions";

import { useDispatch, useSelector } from "react-redux";
import { startLoadingForum } from "../Redux/Actions/forumActions";

const ForumScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingForum());
	}, [dispatch]);

  const {QuestionsForum} = useSelector(state => state.forum)


	return (
		<>
			<Sidebar />

			<SearchBar />

			{QuestionsForum.map((question) => (
				<div className="w-full flex flex-col justify-center items-center p-0">
					<Questions key={question.id} {...question} />
				</div>
			))}

			<div className="z-50 bottom-0 pt-24">
				<Footer />
			</div>
		</>
	);
};

export default ForumScreen;
