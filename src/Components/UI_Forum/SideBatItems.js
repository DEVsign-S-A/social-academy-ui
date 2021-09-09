import React from "react";
//import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Li } from "../Tailwind/Li";
import { Span } from "../Tailwind/Span";
import "./style.css";

export const SideBatItems = ({ name, image, handleSelected, id, hide }) => {
  const { showSidebar } = useSelector((state) => state.ui);

  //const history = useHistory();

  const itemSelected = (id) => {


    handleSelected(id);
/*
    Para Redirigir hacia las diferentes pantallas que se vayan a crear se hara de esta forma
    switch (id) {
      case "1":
        history.push("/admin_password");
        break;
      case "2":
        history.push("/module_selection");
        break;

      case "3":
        history.push("/register");
        break;

      default:
        history.push("/");
    }
    */
  };

  return (
    <>
      <Li
        $items_sidebar
        className={`${hide && "bg-white shadow-lg"}`}
        onClick={() => itemSelected(id)}
      >
        <div className="flex items-center">
          <img src={image} alt="icon" />
          {showSidebar && <Span $span_sidebar>{name}</Span>}
        </div>
        <span className="tooltip">{name}</span>
      </Li>
    </>
  );
};
