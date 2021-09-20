import React from 'react';
import { Sidebar } from '../Components/UI_Forum/Sidebar';
import { SearchBar } from '../Components/UI_Forum/searchBar';
import { Footer } from "../Components/UI_Footer/Footer";
import { Questions } from '../Components/UI_Forum/Questions';

import {dataForum} from '../data/dataForum.js';

const ForumScreen = () => {
  return (
    <>
      <Sidebar/>
    
      <SearchBar/>

      {
        dataForum.map(
          (question) => (
            <div className="w-full flex flex-col justify-center items-center ">
            <Questions
              key={question.IdQuestion}
              {...question}
            />
            </div>
          )
        )
      }

      <div
       className="z-50 bottom-0 pt-24"
      >

      <Footer />
      </div>
    </>
  );
};

export default ForumScreen;
