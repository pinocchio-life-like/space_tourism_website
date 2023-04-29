import React, { useContext, useState } from "react";
import MenuContext from "../../MenuContext/menu-context";
import "./Destination.css";
import Europa from "./Europa/Europa";
import Mars from "./Mars/Mars";
import Moon from "./Moon/Moon";
import Titan from "./Titan/Titan";

const Destination = () => {
  const context = useContext(MenuContext);
  const destination = context.selectedDestination;
  const PictureClass = context.selectedPictureClass;

  return (
    <div className="Destination">
      <div className="navigatedTitle">
        <strong>01 </strong>PICK YOUR DESTINATION
      </div>
      <div className="SelectedDestination">
        <div className={`${PictureClass}`}></div>
        <div>
          <div className="DestinationNavigation">
            <div className="DestinationNavigationBar">
              <a
                href="#"
                className={`${destination === "Moon" ? "Moon" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Moon");
                }}>
                MOON
              </a>
              <a
                href="#"
                className={`${destination === "Mars" ? "Mars" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Mars");
                }}>
                MARS
              </a>
              <a
                href="#"
                className={`${destination === "Europa" ? "Europa" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Europa");
                }}>
                EUROPA
              </a>
              <a
                href="#"
                className={`${destination === "Titan" ? "Titan" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Titan");
                }}>
                TITAN
              </a>
            </div>
            <div className="DestinationDescription">
              <div>
                {destination === "Moon" ? (
                  <Moon />
                ) : destination === "Mars" ? (
                  <Mars />
                ) : destination === "Europa" ? (
                  <Europa />
                ) : (
                  <Titan />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
