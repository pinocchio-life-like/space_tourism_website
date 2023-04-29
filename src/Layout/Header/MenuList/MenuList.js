import React, { useContext } from "react";
import MenuContext from "../../../MenuContext/menu-context";
import "./MenuList.css";

const MenuList = () => {
  const context = useContext(MenuContext);
  const styler = context.selectedRoute;
  return (
    <ul className="MenuList ">
      <li>
        <a
          className={`${styler === "Home" ? "HomepageList" : ""}`}
          href="#"
          onClick={() => {
            context.onRouteChange("Home");
          }}>
          <strong>00 </strong>
          HOME
        </a>
      </li>
      <li>
        <a
          className={`${styler === "Destination" ? "DestinationList" : ""}`}
          href="#"
          onClick={() => {
            context.onRouteChange("Destination");
          }}>
          <strong>01 </strong>
          DESTINATION
        </a>
      </li>
      <li>
        <a
          className={`${styler === "Crew" ? "CrewList" : ""}`}
          href="#"
          onClick={() => {
            context.onRouteChange("Crew");
          }}>
          <strong>02 </strong>
          CREW
        </a>
      </li>
      <li>
        <a
          className={`${styler === "Technology" ? "TechnologyList" : ""}`}
          href="#"
          onClick={() => {
            context.onRouteChange("Technology");
          }}>
          <strong>03 </strong>
          TECHNOLOGY
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
