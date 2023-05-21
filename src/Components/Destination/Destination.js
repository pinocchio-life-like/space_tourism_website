import React, { useContext } from "react";
import MenuContext from "../../MenuContext/menu-context";
import "./Destination.css";
import Europa from "./Europa/Europa";
import Mars from "./Mars/Mars";
import Moon from "./Moon/Moon";
import Titan from "./Titan/Titan";
import Typography from "antd/es/typography/Typography";

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
              <Typography.Link
                href="#"
                className={`${destination === "Moon" ? "Moon" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Moon");
                }}>
                MOON
              </Typography.Link>
              <Typography.Link
                href="#"
                className={`${destination === "Mars" ? "Mars" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Mars");
                }}>
                MARS
              </Typography.Link>
              <Typography.Link
                href="#"
                className={`${destination === "Europa" ? "Europa" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Europa");
                }}>
                EUROPA
              </Typography.Link>
              <Typography.Link
                href="#"
                className={`${destination === "Titan" ? "Titan" : ""}`}
                onClick={() => {
                  context.onDestinationChange("Titan");
                }}>
                TITAN
              </Typography.Link>
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
