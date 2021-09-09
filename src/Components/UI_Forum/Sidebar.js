import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import X from "../../assets/UI_Forum/X.svg";
import "./style.css";
import { setSidebar } from "../../Redux/Actions/uiActions";
import { SideBatItems } from "./SideBatItems";

export const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.ui);

  const [itemsSidebar, setitemsSidebar] = useState([
    {
      id: "1",
      name: "Teachers",
      image: `${"./assets/Project.svg"}`,
      hide: false,
    },
    {
      id: "2",
      name: "Teacher Rates",
      image: `${"./assets/Text.svg"}`,
      hide: false,
    },
    {
      id: "3",
      name: "Register Lessons",
      image: `${"./assets/Project.svg"}`,
      hide: false,
    },
    {
      id: "4",
      name: "Mini chanllenges",
      image: `${"./assets/Tasks.svg"}`,
      hide: false,
    },
    {
      id: "5",
      name: "Adimistrative hours",
      image: `${"./assets/Calendar.svg"}`,
      hide: false,
    },
    {
      id: "6",
      name: "Affiliate program",
      image: `${"./assets/Shopping.svg"}`,
      hide: false,
    },
    {
      id: "7",
      name: "Reports",
      image: `${"./assets/Folder.svg"}`,
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
    <div className={`sidebar ${showSidebar && "open"} `}>
      <br />
      <div className={`flex ${showSidebar && "m-2"} `}>
        <img src={`./assets/Logos/sociallog.svg`} alt="sociallog" />

        {showSidebar && (
          <img
            src={X}
            alt="Close"
            onClick={handleClose}
            className={`iconClose ${
              showSidebar &&
              "px-4 py-0 bg-gray-200 ml-5 rounded-lg cursor-pointer"
            } `}
          />
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
  );
};
