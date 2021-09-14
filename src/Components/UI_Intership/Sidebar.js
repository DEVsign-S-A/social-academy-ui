import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import x from "../../assets/UI_Forum/X.svg";
import right from "../../assets/UI_Forum/Menu.svg";
import "../UI_Forum/style.css";
import { setSidebar } from "../../Redux/Actions/uiActions";
import { SideBatItems } from "./SideBatItems";

export const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.ui);

  const [itemsSidebar, setitemsSidebar] = useState([
    {
      id: "1",
      name: "Diseño",
      image: `${"./assets/sidebar/pen.svg"}`,
      hide: false,
    },
    {
      id: "2",
      name: "Economia",
      image: `${"./assets/sidebar/diagram.svg"}`,
      hide: false,
    },
    {
      id: "3",
      name: "Programación",
      image: `${"./assets/sidebar/program.svg"}`,
      hide: false,
    },
    {
      id: "4",
      name: "Finanzas",
      image: `${"./assets/sidebar/finansas.svg"}`,
      hide: false,
    },
  ]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSidebar(!showSidebar));
  };

  const handleSelected = (id) => {
    let ItemsCopy = itemsSidebar.map((elem) => {
      if (elem.id === id) {
        elem.hide = true;
      } else {
        elem.hide = false;
      }
      return elem;
    });

    setitemsSidebar(ItemsCopy);
  };

  //openSidebar={openSidebar}
  //${ && "open"}
  return (
    <>
      <div className={`sidebar ${showSidebar && "open"} `}>
        <br />
        <div className={`flex ${showSidebar && "m-2"} `}>
        {!showSidebar && (
          <img
            src={right}
            alt="_"
            onClick={handleClose}
            className="ml-3 cursor-pointer"
          />
          )}

          {showSidebar && (
            <div className='flex'>
              <p
                className={`text-primary font-Poppins text-xs font-medium mr-2 ${
                  showSidebar &&
                  "text-primary font-Poppins text-2xl font-semibold"
                } `}
              >
                Categorias
              </p>
              <img
                src={x}
                alt="Close"
                onClick={handleClose}
                className={`${
                  showSidebar &&
                  "px-4 py-0 bg-gray-200 ml-5 rounded-md cursor-pointer"
                } `}
              />
            </div>
          )}
        </div>

        <ul className="nav-links mt-5">
          {itemsSidebar.map((itemSidebar) => (
            <SideBatItems
              key={itemSidebar.id}
              id={itemSidebar.id}
              name={itemSidebar.name}
              hide={itemSidebar.hide}
              image={itemSidebar.image}
              handleSelected={handleSelected}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
