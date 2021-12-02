import React from "react";
import { CardsCursos } from "../Components/UI_Cursos/CardsCursos";
import { SearchBarCourses } from "../Components/UI_Cursos/SearchBarCourses";
import { Footer } from "../Components/UI_Footer/Footer";

const CoursesScreen = () => {
	return (
		<>
			<SearchBarCourses />

			<CardsCursos />

			<Footer />
		</>
	);
};

export default CoursesScreen;
