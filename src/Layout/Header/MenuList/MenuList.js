import React, { useContext } from "react";
import MenuContext from "../../../MenuContext/menu-context";
import "./MenuList.css";
import { Typography } from "antd";

const MenuList = () => {
  const context = useContext(MenuContext);
  const styler = context.selectedRoute;
  return (
    <ul className="MenuList ">
      <li>
        <Typography.Link
          className={`${styler === "Home" ? "HomepageList" : ""}`}
          onClick={() => {
            context.onRouteChange("Home");
          }}>
          <strong>00 </strong>
          HOME
        </Typography.Link>
      </li>
      <li>
        <Typography.Link
          className={`${styler === "Destination" ? "DestinationList" : ""}`}
          onClick={() => {
            context.onRouteChange("Destination");
          }}>
          <strong>01 </strong>
          DESTINATION
        </Typography.Link>
      </li>
      <li>
        <Typography.Link
          className={`${styler === "Crew" ? "CrewList" : ""}`}
          onClick={() => {
            context.onRouteChange("Crew");
          }}>
          <strong>02 </strong>
          CREW
        </Typography.Link>
      </li>
      <li>
        <Typography.Link
          className={`${styler === "Technology" ? "TechnologyList" : ""}`}
          onClick={() => {
            context.onRouteChange("Technology");
          }}>
          <strong>03 </strong>
          TECHNOLOGY
        </Typography.Link>
      </li>
    </ul>
  );
};

export default MenuList;
