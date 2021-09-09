import React from 'react';
import { Sidebar } from '../Components/UI_Forum/Sidebar';
import { SearchBar } from '../Components/UI_Forum/searchBar';
import { Footer } from "../Components/UI_Footer/Footer";
const ForumScreen = () => {
  return (
    <>
      <Sidebar/>
      
      <SearchBar/>
      
      <div
       className="z-50 bottom-0 pt-24"
      >

      <Footer />
      </div>
    </>
  );
};

export default ForumScreen;
