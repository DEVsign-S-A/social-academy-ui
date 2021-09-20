import React from 'react';
import { CardsCursos } from '../Components/UI_Cursos/CardsCursos';
import { Footer } from '../Components/UI_Footer/Footer';
import { Sidebar } from '../Components/UI_Forum/Sidebar';

const CoursesScreen = () => {
  return (
    <>
      <Sidebar/>

      <CardsCursos/>

      <Footer/>
    </>
  );
};

export default CoursesScreen;
